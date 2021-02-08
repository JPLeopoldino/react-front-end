import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AppContext from '../../contexts/AppContext';
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        dots: true,
        focusOnSelect: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        adaptiveHeight: true
      };
      return (
        <div>
          <h2> Single Item</h2>
                <AppContext.Consumer>
                    {context => {
                        return (
                            <Slider {...settings}>
                            {context.products.map((p, i) => {
                                return (
                                    <ProductItem key={i} specs={p}/>
                                );
                            })}
                            </Slider>
                        );
                    }}
                </AppContext.Consumer>
        </div>
      );
    }
  }

// const productsPage = ()=>{
//     return(
        // <AppContext.Consumer>
        //     {context => {
        //         return (
        //             <div>
                        
                    
        //                 {context.products.map((p, i) => {
        //                         return (
        //                             <ProductItem key={i} specs={p}/>
        //                         );
        //                     })}
                    
        //             </div>
        //         );
        //     }}
        // </AppContext.Consumer>
//     );
// }

// export default productsPage;