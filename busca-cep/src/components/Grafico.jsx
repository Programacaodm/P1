import { Chart } from 'primereact/chart';

export default function Grafico({ localidades }) {
        const ufFrequencia = localidades.reduce((acc, loc) => {
        acc[loc.uf] = (acc[loc.uf] || 0) + 1;
        return acc;
    }, {});

    const dadosGrafico = {
        labels: Object.keys(ufFrequencia),
        datasets: [
            {
                data: Object.values(ufFrequencia),
            },
        ],
    };
    return (
        localidades.length === 0 ? (
            <p>Nenhum dado para exibir.</p>
        ) : (
            <div style={{ width: '400px' }}>
                <h2 >Distribuição por UF</h2>
                <Chart type="pie" data={dadosGrafico} />
            </div>
        )
    );
}