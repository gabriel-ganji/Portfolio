import React, { useEffect, useRef } from "react";
import { TrainingStyled } from "./style";

interface Star {
    X: number;
    Y: number;
    SX: number;
    SY: number;
    W: number;
    H: number;
    age: number;
    dies: number;
    ID: number;
    C: string;
    Draw: () => void;
}

const Training: React.FC = () => {
    const field = useRef<HTMLCanvasElement | null>(null);
    const f = useRef<CanvasRenderingContext2D | null>(null);
    const stars: Record<number, Star> = {};
    let starIndex = 0;
    let numStars = 0;
    let acceleration = 1;
    let starsToDraw = (window.innerWidth) / 10;

    const getUrlParameter = (sParam: string): string | null => {
        const sPageURL = decodeURIComponent(window.location.search.substring(1));
        const sURLVariables = sPageURL.split("&");

        for (let i = 0; i < sURLVariables.length; i++) {
            const sParameterName = sURLVariables[i].split("=")[0];
            const sParameterValue = sURLVariables[i].split("=")[1];

            if (sParameterName === sParam) {
                return sParameterValue === undefined ? null : sParameterValue;
            }
        }

        return null;
    };

    class StarClass implements Star {
        X: number;
        Y: number;
        SX: number;
        SY: number;
        W: number;
        H: number;
        age: number;
        dies: number;
        ID: number;
        C: string;

        constructor() {
            this.X = window.innerWidth / 2;
            this.Y = window.innerHeight / 2;
            this.SX = Math.random() * 10 - 5;
            this.SY = Math.random() * 10 - 5;
            const start = field.current?.width ?? 0;
            this.X += (this.SX * start) / 10;
            this.Y += (this.SY * start) / 10;
            this.W = 1;
            this.H = 1;
            this.age = 0;
            this.dies = 500;
            starIndex++;
            this.ID = starIndex;
            this.C = "#009fcb";
        }

        Draw() {
            this.X += this.SX;
            this.Y += this.SY;
            this.SX += this.SX / (50 / acceleration);
            this.SY += this.SY / (50 / acceleration);
            this.age++;

            if (
                this.age === Math.floor(50 / acceleration) ||
                this.age === Math.floor(150 / acceleration) ||
                this.age === Math.floor(300 / acceleration)
            ) {
                this.W++;
                this.H++;
            }

            if (
                this.X + this.W < 0 ||
                this.X > (field.current?.width ?? 0) ||
                this.Y + this.H < 0 ||
                this.Y > (field.current?.height ?? 0)
            ) {
                delete stars[this.ID];
                numStars--;
            }

            if (f.current) {
                f.current.fillStyle = this.C;
                f.current.fillRect(this.X, this.Y, this.W, this.H);
            }
        }
    }

    const draw = () => {
        if (field.current && field.current instanceof HTMLCanvasElement && f.current) {
            if (field.current.width !== window.innerWidth) {
                field.current.width = window.innerWidth;
            }
            if (field.current.height !== window.innerHeight) {
                field.current.height = window.innerHeight;
            }

            f.current.fillStyle = "rgba(8, 8, 8, 0.2)";
            f.current.fillRect(0, 0, field.current.width, field.current.height);

            for (let i = numStars; i < starsToDraw; i++) {
                const star = new StarClass();
                stars[star.ID] = star;
                numStars++;
            }

            for (const star in stars) {
                stars[star].Draw();
            }
        }
    };


    useEffect(() => {
        field.current = document.getElementById("field") as HTMLCanvasElement;
        f.current = field.current?.getContext("2d");
        window.addEventListener("resize", draw);

        return () => {
            window.removeEventListener("resize", draw);
        };
    }, []);

    useEffect(() => {
        const starsQueryParam = getUrlParameter("stars");
        const accelQueryParam = getUrlParameter("accel");

        if (starsQueryParam) {
            starsToDraw = parseInt(starsQueryParam, 10);
        }
        if (accelQueryParam) {
            acceleration = parseInt(accelQueryParam, 10);
        }
    }, []);

    useEffect(() => {
        const intervalId = setInterval(draw, 40);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div>
            <TrainingStyled>
                <canvas id='field'></canvas>
                <div id="training-only" style={{ position: 'absolute', opacity: '1' }}>
                    <div className='title'>
                        <h2>CONQUISTAS</h2>
                    </div>
                    <div id="training">
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-around",
                                width: "50%",
                                color: 'white'
                            }}
                        >
                            <p>
                                Graças a sua confiança em nosso trabalho podemos seguir
                                crescendo em conjunto e proporcionar experiências incríveis.
                                Nossa maior conquista é solucionar os seus problemas
                            </p>
                            <div id="conquers">
                                <div className="cardConquers">
                                    <p>24</p>
                                    <p>PROJETOS CONCLUÍDOS</p>
                                </div>
                                <div className="cardConquers">
                                    <p>32</p>
                                    <p>CLIENTES SATISFEITOS</p>
                                </div>
                                <div className="cardConquers">
                                    <p>1723</p>
                                    <p>HORAS DE SUPORTE</p>
                                </div>
                                <div className="cardConquers">
                                    <p>7</p>
                                    <p>TIME SCRUM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </TrainingStyled>
        </div>
    );
};

export default Training;
