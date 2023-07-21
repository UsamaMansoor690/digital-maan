import React from 'react'
import '../css/recentItem.css'
import '../css/card.css'

import Card from './Card'

/* Item Images */
import item1 from '../images/item-one.jpg'
import item2 from '../images/item-two.jpg'
import item3 from '../images/item-three.jpg'
import item4 from '../images/item-four.jpg'
import item5 from '../images/item-five.jpg'
import item6 from '../images/item-six.jpg'

export default function RecentItem() {
    return (
        <div className='recent-item'>
          <p className='itemHeading'><span>RECENT</span> ITEMS</p>
    
          <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item1}  price="$32" description="256 IPhone Mockup"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item2}  price="$58" description="Butique Ecommerce"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item3}  price="$37" description="Window 10 UI Kit"/>
                </div>
            </div>
            <br />
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item4}  price="$32" description="600 Flat Icons"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item5}  price="$29" description="Wireframe Kit"/>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                  <Card image={item6}  price="$34" description="30 Oceans"/>
                </div>
            </div>
          </div>
        </div>
      )
}
