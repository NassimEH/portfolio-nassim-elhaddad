
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useSettingsStore } from '../store/useSettingsStore';

interface ThreeSceneProps {
  className?: string;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ className }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const particlesMeshRef = useRef<THREE.Points | null>(null);
  const frameId = useRef<number | null>(null);
  const [hovering, setHovering] = useState(false);
  const theme = useSettingsStore(state => state.theme);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    // Initialize scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Lighting - colors depend on theme
    const primaryColor = theme === 'dark' ? 0x4fc3dc : 0x3a86ff;
    const secondaryColor = theme === 'dark' ? 0xe04fd1 : 0xff006e;
    
    const ambientLight = new THREE.AmbientLight(0x404040, 1);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(primaryColor, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(secondaryColor, 2);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);
    
    // Create wireframe sphere
    const sphereGeometry = new THREE.IcosahedronGeometry(2, 5);
    const sphereMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: theme === 'dark' ? 0x101010 : 0x404040,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphereRef.current = sphere;
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: theme === 'dark' ? 0xffffff : 0x333333,
      transparent: true,
      opacity: 0.7,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    
    const windowHalfX = width / 2;
    const windowHalfY = height / 2;
    
    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    
    document.addEventListener('mousemove', onDocumentMouseMove);
    
    // Interactive hover effect
    const handleMouseEnter = () => {
      setHovering(true);
    };
    
    const handleMouseLeave = () => {
      setHovering(false);
    };
    
    mountRef.current.addEventListener('mouseenter', handleMouseEnter);
    mountRef.current.addEventListener('mouseleave', handleMouseLeave);
    
    // Click effect - create ripple
    const handleClick = (event: MouseEvent) => {
      if (!scene) return;
      
      // Calculate mouse position in normalized device coordinates
      const rect = mountRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      const mouseX = ((event.clientX - rect.left) / width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / height) * 2 + 1;
      
      // Create ripple effect
      const rippleGeometry = new THREE.RingGeometry(0.1, 0.2, 32);
      const rippleMaterial = new THREE.MeshBasicMaterial({
        color: theme === 'dark' ? 0x4fc3dc : 0x3a86ff,
        transparent: true,
        opacity: 0.8,
      });
      
      const ripple = new THREE.Mesh(rippleGeometry, rippleMaterial);
      
      // Convert to 3D space
      const vector = new THREE.Vector3(mouseX, mouseY, 0.5);
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      
      ripple.position.copy(pos);
      ripple.position.z = 0;
      scene.add(ripple);
      
      // Animate and remove
      const startTime = Date.now();
      const expandRipple = () => {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / 1000, 1); // 1 second animation
        
        ripple.scale.x = 1 + progress * 5;
        ripple.scale.y = 1 + progress * 5;
        rippleMaterial.opacity = 0.8 * (1 - progress);
        
        if (progress < 1) {
          requestAnimationFrame(expandRipple);
        } else {
          scene.remove(ripple);
          rippleGeometry.dispose();
          rippleMaterial.dispose();
        }
      };
      
      expandRipple();
    };
    
    mountRef.current.addEventListener('click', handleClick);
    
    // Animation loop
    const animate = () => {
      targetX = mouseX * 0.001;
      targetY = mouseY * 0.001;
      
      if (sphereRef.current) {
        // Speed up rotation when hovering
        const rotationSpeed = hovering ? 0.005 : 0.002;
        sphereRef.current.rotation.y += rotationSpeed;
        sphereRef.current.rotation.x += rotationSpeed * 0.7;
        
        // More responsive to mouse movement when hovering
        const mouseSensitivity = hovering ? 0.1 : 0.05;
        sphereRef.current.rotation.y += (targetX - sphereRef.current.rotation.y) * mouseSensitivity;
        sphereRef.current.rotation.x += (targetY - sphereRef.current.rotation.x) * mouseSensitivity;
      }
      
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.y += hovering ? 0.003 : 0.001;
        
        // Particles follow mouse slightly
        particlesMeshRef.current.rotation.x += targetY * 0.0005;
        particlesMeshRef.current.rotation.y += targetX * 0.0005;
      }
      
      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      frameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const newWidth = mountRef.current.clientWidth;
      const newHeight = mountRef.current.clientHeight;
      
      cameraRef.current.aspect = newWidth / newHeight;
      cameraRef.current.updateProjectionMatrix();
      
      rendererRef.current.setSize(newWidth, newHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
        mountRef.current.removeEventListener('mouseenter', handleMouseEnter);
        mountRef.current.removeEventListener('mouseleave', handleMouseLeave);
        mountRef.current.removeEventListener('click', handleClick);
      }
      
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, [hovering, theme]);
  
  return <div ref={mountRef} className={`w-full h-full ${className || ''} cursor-pointer`} />;
};

export default ThreeScene;
