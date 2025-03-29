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

    // Scene setup avec optimisations
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    
    // Initialize scene avec optimisations
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Camera optimisée
    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 100);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    // Renderer optimisé
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: false, // Désactivé pour les performances
      powerPreference: "high-performance",
      precision: "mediump"
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limite le pixel ratio
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;
    
    // Lighting optimisé
    const primaryColor = theme === 'dark' ? 0x4fc3dc : 0x3a86ff;
    const secondaryColor = theme === 'dark' ? 0xe04fd1 : 0xff006e;
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(primaryColor, 1.5);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);
    
    const pointLight2 = new THREE.PointLight(secondaryColor, 1.5);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);
    
    // Géométrie optimisée
    const sphereGeometry = new THREE.IcosahedronGeometry(2, 3); // Réduit la complexité
    const sphereMaterial = new THREE.MeshBasicMaterial({ // MeshBasicMaterial au lieu de MeshPhongMaterial
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);
    sphereRef.current = sphere;
    
    // Particules optimisées
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500; // Réduit le nombre de particules
    
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.01,
      color: theme === 'dark' ? 0xffffff : 0x333333,
      transparent: true,
      opacity: 0.5,
    });
    
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesMeshRef.current = particlesMesh;
    
    // Animation optimisée
    let lastTime = 0;
    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      if (sphereRef.current) {
        const rotationSpeed = hovering ? 0.001 : 0.0005;
        sphereRef.current.rotation.y += rotationSpeed * deltaTime;
        sphereRef.current.rotation.x += rotationSpeed * 0.7 * deltaTime;
      }
      
      if (particlesMeshRef.current) {
        particlesMeshRef.current.rotation.y += (hovering ? 0.0005 : 0.0002) * deltaTime;
      }
      
      if (rendererRef.current && cameraRef.current && sceneRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
      
      frameId.current = requestAnimationFrame(animate);
    };
    
    animate(0);
    
    // Gestion du redimensionnement optimisée
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!mountRef.current || !cameraRef.current || !rendererRef.current) return;
        
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        
        cameraRef.current.aspect = newWidth / newHeight;
        cameraRef.current.updateProjectionMatrix();
        
        rendererRef.current.setSize(newWidth, newHeight);
      }, 250); // Debounce de 250ms
    };
    
    window.addEventListener('resize', handleResize);
    
    // Nettoyage
    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      
      if (mountRef.current && rendererRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Libération de la mémoire
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [hovering, theme]);
  
  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className || ''}`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    />
  );
};

export default React.memo(ThreeScene); // Mémoisation du composant
