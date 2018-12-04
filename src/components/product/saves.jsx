import React, { Component } from 'react';
class Save extends Component {
  state = {
    active: 0,
    tips: [
      {
        _id: 0,
        img: 'shopping',
        title: 'Smarter Shopping',
        points: [
          { img: 'think', text: 'Think before you buy' },
          {
            img: 'quality',
            text:
              'Buy quality, reusable products such as non-disposable cameras, reusable or electric razors, reusable dishes and mugs and utensils and have your child carry lunch in a reusable lunch box.'
          },
          {
            img: 'donate',
            text: 'Donate whatever you can, where it’s appropriate.'
          },
          { img: 'recycle', text: 'Recycle everything that you cand' }
        ]
      },
      {
        _id: 1,
        img: 'digital',
        title: 'Go Digital',
        points: [
          {
            img: 'newspaper',
            text: 'Go digital with your newspaper subscription.'
          },
          {
            img: 'printing',
            text:
              'Take advantage of your digital devices and cut back on printing!'
          },
          {
            img: 'recycleG',
            text:
              'Use less paper or recycle it – there are lots of ways to do this. Think, “saving paper (or plastic, glass or aluminum for that matter) equals saving water.”'
          },
          { img: 'library', text: 'Go to libraries for books!' }
        ]
      },
      {
        _id: 2,
        img: 'clothes',
        title: 'Save on Clothes',
        points: [
          {
            img: 'question',
            text:
              'Stop and ask yourself whether or not you really need that new piece of clothing.'
          },
          {
            img: 'swap',
            text:
              'Have a clothing swap with friends/co-workers/social networks and donate the leftover goods to a charity.'
          },
          {
            img: 'money',
            text:
              'Sell the clothes you’re ready to part with on eBay or at a consignment shop.'
          },
          {
            img: 'cotton',
            text:
              'Choose organic cotton. Most cotton is grown in arid locations and with heavy pesticide use.'
          }
        ]
      },
      {
        _id: 3,
        img: 'bottle',
        title: 'Go for Reusable!',
        points: [
          {
            img: 'cup',
            text:
              'Get a reusable container, fill it with your own beverage or water from a fountain and reduce the need for more packaging-intensive, single serving sizes.'
          },
          {
            img: 'tableware',
            text:
              'Carry a set of reusable tableware with you if you eat takeout a lot. '
          },
          {
            img: 'bag',
            text:
              'Use cloth or reusable shopping bags. Plastic bag recycling is still extremely limited.'
          },
          {
            img: 'recycleG',
            text:
              'Recycle (or reuse) every bit of plastic you can and only throw it in the trash as a last resort.'
          }
        ]
      }
    ]
  };

  getCard(tip, id) {
    return (
      <div className={id == 0 ? 'carousel-item active' : 'carousel-item'}>
        <div className="card">
          <div className="card-body row">
            <div className="img col-sm-6">
              <img
                src={require(`../../imgs/product/save/${tip.img}.jpg`)}
                style={{ width: '100%' }}
              />
            </div>
            <div className="text col-sm-6">
              <div className="text-title">{tip.title}</div>
              {tip.points.map(function(p, j) {
                return (
                  <div style={{ width: '100%' }} key={j}>
                    <div
                      className="des"
                      style={{
                        marginBottom: `${
                          j == tip.points.length ? '1em' : '3em'
                        }`
                      }}
                    >
                      {p.text}
                      <img
                        src={require(`../../imgs/product/save/${p.img}.png`)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    var parent = this;
    return (
      <React.Fragment>
        <div
          id="product-carousel"
          className="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#product-carousel"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#product-carousel" data-slide-to="1" />
            <li data-target="#product-carousel" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            {this.state.tips.map(function(tip, i) {
              return (
                <React.Fragment key={i}>
                  {parent.getCard(tip, i)}
                </React.Fragment>
              );
            })}
          </div>
          <a
            className="carousel-control-prev control"
            href="#product-carousel"
            role="button"
            data-slide="prev"
          >
            <span style={{ color: 'grey', fontSize: '3em' }}>{'<'}</span>
          </a>
          <a
            className="carousel-control-next control"
            href="#product-carousel"
            role="button"
            data-slide="next"
          >
            <span style={{ color: 'grey', fontSize: '3em' }}>></span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Save;
