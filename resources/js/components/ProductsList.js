import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


    class ProductsList extends Component {
      constructor () {
        super();
        this.state = {
          products: [],
          isLoading: true,
           errors: null
        };
      }

      componentDidMount () {
        axios.get('http://127.0.0.1:8000/api/products').then(response => {
          this.setState({
            products: response.data.products,
            isLoading: false
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
      }

      render () {
        const {  products } = this.state
        return (
          <div>
            <div className='row justify-content-center'>
              <div className='col-md-8'>
                <div className='card'>
                  <div className='card-header'>All products</div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/create'>
                      Create new product
                    </Link>
                        <div>
                        <ul className='list-group list-group-flush'>
                            {products && products.map(product => (
                                <Link
                                className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
                                to={`/${product.id}`}
                                key={product.id}
                               >
                                {product.name}
                                <span className='badge badge-primary badge-pill'>
                                  {product.stock}
                                </span>
                              </Link>
                            ))}
                            </ul>
                          </div>
                         
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
    }

    export default ProductsList