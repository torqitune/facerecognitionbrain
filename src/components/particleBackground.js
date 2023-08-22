import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
// import { loadFull } from "tsparticles";
import { useCallback,useMemo } from "react";

const ParticlesComponents = (props) => {

    const options = useMemo(() => {
        return {
            background: {
                // color: "#000",
            },
            fullScreen: {
                enable: true,
                zIndex: -1,
            },
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    }
                },
                modes: {
                    push: {
                        quantity: 10,
                    },
                    bubbles: {
                        distance: 100,
                        size: 100,
                        duration: 100,
                    }
                }
            },
            particles: {
                link: {
                    enable: true,
                    distance: 200,
                },
            
                move: {
                    enable: true,
                    speed: {min:1 , max: 4}
                },
                opacity: {
                    value: {min: 0.3, max: 1}
                },
                size: {
                    value: {min: 1,max: 5}
                }

            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles id={props.id} init={particlesInit} options={options}/>;
};

export default ParticlesComponents;