import './sectionSeven.css';
import * as ReactBootStrap from "react-bootstrap";
import { useEffect, useState } from 'react';

function SectionSeven(props) {

  const [beginPercent, setBeginPercent] = useState(0);
  const [frameInterval, setFrameInterval] = useState(0)

  useEffect(() => {
    setBeginPercent(((window.scrollY + document.getElementsByClassName('section7')[0].getBoundingClientRect().top) / (document.documentElement.scrollHeight + document.documentElement.clientHeight)
    ) * 100)

    setFrameInterval((((((window.scrollY + document.getElementsByClassName('section7')[0].getBoundingClientRect().bottom) / document.documentElement.scrollHeight) - document.documentElement.clientHeight
    ) * 100) - ((((window.scrollY + document.getElementsByClassName('section7')[0].getBoundingClientRect().top) / document.documentElement.scrollHeight) - document.documentElement.clientHeight
    ) * 100)) / 35)
  }, [])

  useEffect(() => {

    console.log(frameInterval)

    if (props.scrollValue > (beginPercent + (frameInterval * 0)) && props.scrollValue < (beginPercent + (frameInterval * (0 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-1')[0].classList.add('show')
      document.getElementsByClassName('flower-image-1')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 1)) && props.scrollValue < (beginPercent + (frameInterval * (1 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-2')[0].classList.add('show')
      document.getElementsByClassName('flower-image-2')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 2)) && props.scrollValue < (beginPercent + (frameInterval * (2 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-3')[0].classList.add('show')
      document.getElementsByClassName('flower-image-3')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 3)) && props.scrollValue < (beginPercent + (frameInterval * (3 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-4')[0].classList.add('show')
      document.getElementsByClassName('flower-image-4')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 4)) && props.scrollValue < (beginPercent + (frameInterval * (4 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-5')[0].classList.add('show')
      document.getElementsByClassName('flower-image-5')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 5)) && props.scrollValue < (beginPercent + (frameInterval * (5 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-6')[0].classList.add('show')
      document.getElementsByClassName('flower-image-6')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 6)) && props.scrollValue < (beginPercent + (frameInterval * (6 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-7')[0].classList.add('show')
      document.getElementsByClassName('flower-image-7')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 7)) && props.scrollValue < (beginPercent + (frameInterval * (7 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-8')[0].classList.add('show')
      document.getElementsByClassName('flower-image-8')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 8)) && props.scrollValue < (beginPercent + (frameInterval * (8 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-9')[0].classList.add('show')
      document.getElementsByClassName('flower-image-9')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 9)) && props.scrollValue < (beginPercent + (frameInterval * (9 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-10')[0].classList.add('show')
      document.getElementsByClassName('flower-image-10')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 10)) && props.scrollValue < (beginPercent + (frameInterval * (10 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-11')[0].classList.add('show')
      document.getElementsByClassName('flower-image-11')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 11)) && props.scrollValue < (beginPercent + (frameInterval * (11 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-12')[0].classList.add('show')
      document.getElementsByClassName('flower-image-12')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 12)) && props.scrollValue < (beginPercent + (frameInterval * (12 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-13')[0].classList.add('show')
      document.getElementsByClassName('flower-image-13')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 13)) && props.scrollValue < (beginPercent + (frameInterval * (13 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-14')[0].classList.add('show')
      document.getElementsByClassName('flower-image-14')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 14)) && props.scrollValue < (beginPercent + (frameInterval * (14 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-15')[0].classList.add('show')
      document.getElementsByClassName('flower-image-15')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 15)) && props.scrollValue < (beginPercent + (frameInterval * (15 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-16')[0].classList.add('show')
      document.getElementsByClassName('flower-image-16')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 16)) && props.scrollValue < (beginPercent + (frameInterval * (16 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-17')[0].classList.add('show')
      document.getElementsByClassName('flower-image-17')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 17)) && props.scrollValue < (beginPercent + (frameInterval * (17 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-18')[0].classList.add('show')
      document.getElementsByClassName('flower-image-18')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 18)) && props.scrollValue < (beginPercent + (frameInterval * (18 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-19')[0].classList.add('show')
      document.getElementsByClassName('flower-image-19')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 19)) && props.scrollValue < (beginPercent + (frameInterval * (19 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-20')[0].classList.add('show')
      document.getElementsByClassName('flower-image-20')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 20)) && props.scrollValue < (beginPercent + (frameInterval * (20 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-21')[0].classList.add('show')
      document.getElementsByClassName('flower-image-21')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 21)) && props.scrollValue < (beginPercent + (frameInterval * (21 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-22')[0].classList.add('show')
      document.getElementsByClassName('flower-image-22')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 22)) && props.scrollValue < (beginPercent + (frameInterval * (22 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-23')[0].classList.add('show')
      document.getElementsByClassName('flower-image-23')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 23)) && props.scrollValue < (beginPercent + (frameInterval * (23 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-24')[0].classList.add('show')
      document.getElementsByClassName('flower-image-24')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 24)) && props.scrollValue < (beginPercent + (frameInterval * (24 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-25')[0].classList.add('show')
      document.getElementsByClassName('flower-image-25')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 25)) && props.scrollValue < (beginPercent + (frameInterval * (25 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-26')[0].classList.add('show')
      document.getElementsByClassName('flower-image-26')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 26)) && props.scrollValue < (beginPercent + (frameInterval * (26 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-27')[0].classList.add('show')
      document.getElementsByClassName('flower-image-27')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 27)) && props.scrollValue < (beginPercent + (frameInterval * (27 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-28')[0].classList.add('show')
      document.getElementsByClassName('flower-image-28')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 28)) && props.scrollValue < (beginPercent + (frameInterval * (28 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-29')[0].classList.add('show')
      document.getElementsByClassName('flower-image-29')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 29)) && props.scrollValue < (beginPercent + (frameInterval * (29 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-30')[0].classList.add('show')
      document.getElementsByClassName('flower-image-30')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 30)) && props.scrollValue < (beginPercent + (frameInterval * (30 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-31')[0].classList.add('show')
      document.getElementsByClassName('flower-image-31')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 31)) && props.scrollValue < (beginPercent + (frameInterval * (31 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-32')[0].classList.add('show')
      document.getElementsByClassName('flower-image-32')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 32)) && props.scrollValue < (beginPercent + (frameInterval * (32 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-33')[0].classList.add('show')
      document.getElementsByClassName('flower-image-33')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 33)) && props.scrollValue < (beginPercent + (frameInterval * (33 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-34')[0].classList.add('show')
      document.getElementsByClassName('flower-image-34')[1].classList.add('show')
    }

    if (props.scrollValue > (beginPercent + (frameInterval * 34)) && props.scrollValue < (beginPercent + (frameInterval * (34 + 1)))) {
      for (var i = 1; i < 36; i++) {
        document.getElementsByClassName('flower-image-' + i)[0].classList.remove('show')
        document.getElementsByClassName('flower-image-' + i)[1].classList.remove('show')
      }
      document.getElementsByClassName('flower-image-35')[0].classList.add('show')
      document.getElementsByClassName('flower-image-35')[1].classList.add('show')
    }

  })

  return (
    <div className="section section7" >
      <ReactBootStrap.Row className="desktop">

        <ReactBootStrap.Col xs={12} md={7} className="flower-anim">
          <div>
            <img className="flower-image-1 show" src="/images/one petal_00001.png" />
            <img className="flower-image-2" src="/images/one petal_00002.png" />
            <img className="flower-image-3" src="/images/one petal_00003.png" />
            <img className="flower-image-4" src="/images/one petal_00004.png" />
            <img className="flower-image-5" src="/images/one petal_00005.png" />
            <img className="flower-image-6" src="/images/one petal_00006.png" />
            <img className="flower-image-7" src="/images/one petal_00007.png" />
            <img className="flower-image-8" src="/images/one petal_00008.png" />
            <img className="flower-image-9" src="/images/one petal_00009.png" />
            <img className="flower-image-10" src="/images/one petal_00010.png" />
            <img className="flower-image-11" src="/images/one petal_00011.png" />
            <img className="flower-image-12" src="/images/one petal_00012.png" />
            <img className="flower-image-13" src="/images/one petal_00013.png" />
            <img className="flower-image-14" src="/images/one petal_00014.png" />
            <img className="flower-image-15" src="/images/one petal_00015.png" />
            <img className="flower-image-16" src="/images/one petal_00016.png" />
            <img className="flower-image-17" src="/images/one petal_00017.png" />
            <img className="flower-image-18" src="/images/one petal_00018.png" />
            <img className="flower-image-19" src="/images/one petal_00019.png" />
            <img className="flower-image-20" src="/images/one petal_00020.png" />
            <img className="flower-image-21" src="/images/one petal_00021.png" />
            <img className="flower-image-22" src="/images/one petal_00022.png" />
            <img className="flower-image-23" src="/images/one petal_00023.png" />
            <img className="flower-image-24" src="/images/one petal_00024.png" />
            <img className="flower-image-25" src="/images/one petal_00025.png" />
            <img className="flower-image-26" src="/images/one petal_00026.png" />
            <img className="flower-image-27" src="/images/one petal_00027.png" />
            <img className="flower-image-28" src="/images/one petal_00028.png" />
            <img className="flower-image-29" src="/images/one petal_00029.png" />
            <img className="flower-image-30" src="/images/one petal_00030.png" />
            <img className="flower-image-31" src="/images/one petal_00031.png" />
            <img className="flower-image-32" src="/images/one petal_00032.png" />
            <img className="flower-image-33" src="/images/one petal_00033.png" />
            <img className="flower-image-34" src="/images/one petal_00034.png" />
            <img className="flower-image-35" src="/images/one petal_00035.png" />
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section7-content-container">
            <span className="title-text green align-right">EXTRACT WITHOUT HARM.</span>
            <span className="default-text grey align-right">The naturally pure produce must be taken<br />forward with a pure, natural extraction<br />process. We have a unique and proprietary<br />aqueous extraction process. This allows the<br />high levels of purity to be maintained and<br />is designed to global standards</span>
            <a href="/extract" class="default-button green float-right">KNOW MORE</a>
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>


      <ReactBootStrap.Row className="mobile">

        <ReactBootStrap.Col xs={12} md={5}>
          <div className="content-container section7-content-container">
            <span className="title-text green align-right">EXTRACT WITHOUT HARM.</span>
            <span className="default-text grey align-right">The naturally pure produce must be taken<br />forward with a pure, natural extraction<br />process. We have a unique and proprietary<br />aqueous extraction process. This allows the<br />high levels of purity to be maintained and<br />is designed to global standards</span>
            <a href="/extract" class="default-button green float-right">KNOW MORE</a>
          </div>
        </ReactBootStrap.Col>

        <ReactBootStrap.Col xs={12} md={7} className="flower-anim">
          <div>
            <img className="flower-image-1 show" src="/images/one petal_00001.png" />
            <img className="flower-image-2" src="/images/one petal_00002.png" />
            <img className="flower-image-3" src="/images/one petal_00003.png" />
            <img className="flower-image-4" src="/images/one petal_00004.png" />
            <img className="flower-image-5" src="/images/one petal_00005.png" />
            <img className="flower-image-6" src="/images/one petal_00006.png" />
            <img className="flower-image-7" src="/images/one petal_00007.png" />
            <img className="flower-image-8" src="/images/one petal_00008.png" />
            <img className="flower-image-9" src="/images/one petal_00009.png" />
            <img className="flower-image-10" src="/images/one petal_00010.png" />
            <img className="flower-image-11" src="/images/one petal_00011.png" />
            <img className="flower-image-12" src="/images/one petal_00012.png" />
            <img className="flower-image-13" src="/images/one petal_00013.png" />
            <img className="flower-image-14" src="/images/one petal_00014.png" />
            <img className="flower-image-15" src="/images/one petal_00015.png" />
            <img className="flower-image-16" src="/images/one petal_00016.png" />
            <img className="flower-image-17" src="/images/one petal_00017.png" />
            <img className="flower-image-18" src="/images/one petal_00018.png" />
            <img className="flower-image-19" src="/images/one petal_00019.png" />
            <img className="flower-image-20" src="/images/one petal_00020.png" />
            <img className="flower-image-21" src="/images/one petal_00021.png" />
            <img className="flower-image-22" src="/images/one petal_00022.png" />
            <img className="flower-image-23" src="/images/one petal_00023.png" />
            <img className="flower-image-24" src="/images/one petal_00024.png" />
            <img className="flower-image-25" src="/images/one petal_00025.png" />
            <img className="flower-image-26" src="/images/one petal_00026.png" />
            <img className="flower-image-27" src="/images/one petal_00027.png" />
            <img className="flower-image-28" src="/images/one petal_00028.png" />
            <img className="flower-image-29" src="/images/one petal_00029.png" />
            <img className="flower-image-30" src="/images/one petal_00030.png" />
            <img className="flower-image-31" src="/images/one petal_00031.png" />
            <img className="flower-image-32" src="/images/one petal_00032.png" />
            <img className="flower-image-33" src="/images/one petal_00033.png" />
            <img className="flower-image-34" src="/images/one petal_00034.png" />
            <img className="flower-image-35" src="/images/one petal_00035.png" />
          </div>
        </ReactBootStrap.Col>

      </ReactBootStrap.Row>

    </div>
  );
}

export default SectionSeven;





