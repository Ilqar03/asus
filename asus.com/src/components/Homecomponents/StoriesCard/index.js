import React from 'react'
import "./index.scss"
function StoriesCard() {
  return (
    <section className='StoriesCardsec'>
      <div className='StoriesCard'>
        <div className='cards'>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://strix.az/image/cache/catalog/mall/acesories/Head-Set/ASUS%20ROG%20DELTA%20S/201529-7014edf595e6fbc0b02b2c18b7d5a523-700x700.jpg' />
            </div>
            <div className='cardelements'>
              <h3>Qulaqcıq</h3>
              <p>ASUS ROG DELTA S</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://amazoncomp.az/wp-content/uploads/2021/02/81mUGg7nS7L._AC_SL1500_.jpg' />
            </div>
            <div className='cardelements'>
              <h3>Notebook</h3>
              <p>Asus ROG Strix G17</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://www.asus.com/media/Odin/Websites/global/Series/52.png'/>
            </div>
            <div className='cardelements'>
              <h3>Prosessor</h3>
              <p>Asus Gaming Tower PCs</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://www.provantage.com/fullsize/1040140725.JPG'/>
            </div>
            <div className='cardelements'>
              <h3>Printer</h3>
              <p>Asus Printer</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://dlcdnwebimgs.asus.com/files/media/9165af90-fde3-45b0-b229-88af5da8f8fe/websites/global/products/e3qwltu86agd77ck/img/fhd.png'/>
            </div>
            <div className='cardelements'>
              <h3>Veb Kamera</h3>
              <p>Asus VebCam C3</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='data:image/jpeg;base64,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'/>
            </div>
            <div className='cardelements'>
              <h3>Maus</h3>
              <p>ASUS Wireless Optical Gaming Mouse</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://aztech.az/wp-content/uploads/2020/01/456.png'/>
            </div>
            <div className='cardelements'>
              <h3>Ana Plata</h3>
              <p>Asus ROG STRIX Z390-E </p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://compstore.az/data/big/asus_rt-ac5300_gaming_router_-2.jpg'/>
            </div>
            <div className='cardelements'>
              <h3>Modem</h3>
              <p>ASUS RT-AC5300 Gaming Gigabit Wi-Fi 90IG0201-BM2G00 Modem Router</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://cdn.akakce.com/z/asus/asus-rog-strix-scope-nx-tkl-kablolu-mekanik-oyuncu-si.jpg'/>
            </div>
            <div className='cardelements'>
              <h3>Klavyatura</h3>
              <p>Asus ROG Strix Scope NX TKL Red Switch</p>
            </div>
          </div>

          <div className='card'>
            <div className='cardimg'>
              <img alt='foto' src='https://www.asus.com/media/global/gallery/lrflwjrqk3p41mez_setting_xxx_0_90_end_2000.png'/>
            </div>
            <div className='cardelements'>
              <h3>Monitor</h3>
              <p>TUF Gaming VG32VQ1B</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default StoriesCard