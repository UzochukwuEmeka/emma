import React, { useEffect, useRef, useMemo } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = useRef()
  const { scene, animations } = useGLTF('/robot.gltf')
  
  // Clone the scene to make sure it's animatable
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  
  // Get the graph (nodes and materials) from the cloned scene
  const { nodes, materials } = useGraph(clone)
  
  // Load animations
  const { actions, names } = useAnimations(animations, group)

  // Play the animation when the model is loaded
  useEffect(() => {
    // Check if animations are available
    if (actions && names.length > 0) {
      const animationAction = actions[names[0]] // Select the first animation (you can choose another by index or name)
      animationAction.play() // Play the animation
    }
  }, [actions, names])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="a7cc487df9bc45b4836e9db71eb1e6fffbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Basement" position={[0, -14.488, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Main">
                    <group name="Object_7">
                      <group name="Armature" position={[0, 0.835, 1.185]} rotation={[-1.092, 0, 0]}>
                        <group name="Object_29">
                          <primitive object={nodes._rootJoint_1} />
                        </group>
                      </group>
                      <group name="Armature001" position={[0, -0.835, 1.185]} rotation={[1.092, 0, Math.PI]}>
                        <group name="Object_36">
                          <primitive object={nodes._rootJoint_2} />
                        </group>
                      </group>
                      <primitive object={nodes._rootJoint} />
                    </group>
                  </group>
                  <mesh name="Basement_Material_0" geometry={nodes.Basement_Material_0.geometry} material={materials.Material} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// Preload the GLTF model
useGLTF.preload('/robot.gltf')
