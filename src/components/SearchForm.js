import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/esm/Table';
import Employee from './Employee';
import Button from 'react-bootstrap/esm/Button';
import Input from './Input';
import Team from '../employee.json';


function SearchForm() {
    const [listState, setList] = useState(Team)
    const [filter, setFilter] = useState("")
    const [error, setError] = useState("")



    useEffect(() => {
        setList(Team)
        setFilter("")
        setError("")
    }, []);

    const handleInputChange = event => {
        setFilter(event.target.value);
        console.log(filter)
    };

    const results = (e) => {
        e.preventDefault()

        let arr = { results: [] }
        Team.results.forEach(item => {
            if (item.name.first.toLowerCase().includes(filter.toLowerCase()) || item.name.last.toLowerCase().includes(filter.toLowerCase())) {
                arr.results.push(item)
            }
        })
        setList(arr)
    }

    const ascending = () => {
        console.log(listState)
        let container = []
        let answer = { results: [] }
        listState.results.forEach(item => {
            container.push(item.name.first)
        })
        let alpha = container.sort()

        alpha.forEach(item => {
            listState.results.forEach(entry => {
                if (item === entry.name.first) {
                    answer.results.push(entry)
                }
            })
            setList(answer)
        })

    }

    const descending = () => {

        let container = []
        let answer = { results: [] }
        listState.results.forEach(item => {
            container.push(item.name.last)
        })
        let alpha = container.sort()

        alpha.forEach(item => {
            listState.results.forEach(entry => {
                if (item === entry.name.last) {
                    answer.results.push(entry)
                }
            })
            setList(answer)
        })

    }

    return (
        <div className = "mx-5">
            
                <h1 className = "mt-4">Employee Directory</h1>

                
                    <Input
                        onChange={handleInputChange}
                        results={filter} />
                    <Button variant="success mt-4" onClick={results}>Submit</Button>
                
            
            <Table className="table" striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Picture</th>
                        <th scope="col" onClick={ascending}>First Name</th>
                        <th scope="col" onClick={descending}>Last Name</th>
                        <th scope="col"> Email</th>
                        <th scope="col"> Phone</th>

                    </tr>
                </thead>
                <tbody>
                    {listState.results.map(item => (
                        <Employee first={item.name.first} last={item.name.last} image={item.picture.thumbnail} email={item.email} phone={item.phone} num={Team.results.indexOf(item) + 1} />
                    ))}
                </tbody>
            </Table>
        </div>)
}

export default SearchForm;