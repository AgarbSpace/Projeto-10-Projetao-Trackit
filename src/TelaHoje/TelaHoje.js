import dayjs from 'dayjs'
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import HeaderDasPaginas from '../Header/HeaderDasPaginas';
import ContainerTelaHoje from './Styleds/ContainerTelaHoje';

export default function TelaHoje(){
    const [diaDaSemana, setDiaDaSemana] = useState("")
    
    useEffect(() => {

        const indexDia = dayjs().get('day')
    
        switch (indexDia) {
            case 0: setDiaDaSemana("Domingo");
                break;
            
            case 1: setDiaDaSemana("Segunda");
                break;
    
            case 2: setDiaDaSemana("Terça");
                break;
    
            case 3: setDiaDaSemana("Quarta");
                break;
    
            case 4: setDiaDaSemana("Quinta");
                break;
    
            case 5: setDiaDaSemana("Sexta");
                break;
    
            case 6: setDiaDaSemana("Sábado");
    
        }

    }, [])

    return (
        <>
            <HeaderDasPaginas />
            <ContainerTelaHoje>
                <span>{diaDaSemana}, {dayjs().get('date')}/{dayjs().get('month')+1}</span>
            </ContainerTelaHoje>
        </>

    )
}