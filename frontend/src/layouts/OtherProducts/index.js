import React, { Component } from 'react';
import GridCard from '../../components/GridCard';
import Categories1 from '../../assets/images/categories1.jpeg'
import Categories2 from '../../assets/images/categories2.jpeg'
import Categories3 from '../../assets/images/categories3.jpeg'
import Categories4 from '../../assets/images/categories4.jpeg'
import Categories5 from '../../assets/images/categories5.jpeg'
import Categories6 from '../../assets/images/categories6.jpeg'

const categoriesData = 
    [
        {
          src: Categories1,
          altText: 'Sandal Type 1',
          caption: 'Jetset Ribbon Sandal'
        },
        {
          src: Categories2,
          altText: 'Sandal Type 2',
          caption: 'Jetset Heels'
        },
        {
          src: Categories3,
          altText: 'Sandal Type 3',
          caption: 'Jetset Women Sandal'
        },
        {
            src: Categories4,
            altText: 'Sandal Type 4',
            caption: 'Jetset Women Sandal'
        },
        {
            src: Categories5,
            altText: 'Sandal Type 5',
            caption: 'Jetset Women Sandal'
        },
        {
            src: Categories6,
            altText: 'Sandal Type 6',
            caption: 'Jetset Women Sandal'
        }
    ]

export default class OtherProducts extends Component {
    render() {
        return (
            <section id="otherprod" className="container-otherprod">
                <div className="content-container">
                    <div className="content-name">
                        Our Products
                    </div>
                    <GridCard colsPerRow={3} data={categoriesData}/>
                </div>
            </section>
        );
    }
}
