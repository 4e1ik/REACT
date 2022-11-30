import {useSelector, useDispatch} from 'react-redux';
import {fetchCountriesData} from './store/countriesSlice';
import  Chart  from 'react-apexcharts';
import {useEffect} from "react";

export const Countries = () => {

    const dispatch = useDispatch();

    const countries = useSelector((store) => store.countries.countries);

    useEffect(() => {
        dispatch(fetchCountriesData());
    }, [dispatch]);

    const getPopulation = (type, x) => {
        const tempArr = [...countries];
        const pop = [];
        const conName = [];
        tempArr.sort((a, b) =>  b.population - a.population ).forEach((el, i) => {
            if (i < x){
                pop.push(el.population/1000000);
                conName.push(el.name.common);
            }
        });
        if (type === 'countries'){
            return conName;
        } else {
            return pop;
        }
    }

    const options = {
        chart: {
            id: 'basic-bar',
        },
        xaxis: {
            categories: getPopulation('countries', 10),
        },
    };
    const series = [
        {
            name: 'series-1',
            data: getPopulation('pop', 10),
        },
    ];

    return (
        <div>
            <h1>Countries</h1>
            <button onClick={() => dispatch(fetchCountriesData())}>Get data</button>
            <Chart options={options} series={series} width={'100%'} type={'bar'}/>
        </div>

    );
}