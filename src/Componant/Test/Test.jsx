    import React from 'react'
    import Carousel from 'react-bootstrap/Carousel'; 
    import test from '../Assets/test.png'
    import teamimg1 from '../Assets/imgteam1.jpg'
    import teamimg2 from '../Assets/imgteam2.jpg'
    const Test = () => {
      return (
        <div className='test'>
               <Carousel  style={{height:'60vh ' , backgroundColor:'#eee', paddingTop:'50px', height:'auto'}}>
         <Carousel.Item style={{ lineHeight:'30px',position: 'relative', textAlign: 'center', backgroundColor:'#eee', paddingTop:'50px' }}>
                    <h2>Testimonials</h2>
                    <p style={{ margin:' 20px auto',width:'60%', textAlign: 'center',fontSize:'18pxe' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                    <img src={test} alt=""   style={{ borderRadius:'50%', width:'100px' ,height:'100px' }}/>
                    <h2>Maria Jones</h2>
                    <p  style={{ marginBottom:' 50px ' }}>CEO, Co-Founder, XYZ Inc.</p>
      </Carousel.Item>
      <Carousel.Item style={{ lineHeight:'30px',position: 'relative', textAlign: 'center', backgroundColor:'#eee', paddingTop:'50px' }}>
                    <h2>Testimonials</h2>
                    <p  style={{ margin:' 20px auto',width:'60%', textAlign: 'center' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                    <img src={teamimg2} alt=""  style={{ borderRadius:'50%', width:'100px' ,height:'100px' }}/>
                    <h2>jakpo james</h2>
                    <p style={{ marginBottom:' 50px ' }}>CEO, Co-Founder, XYZ Inc.</p>
      </Carousel.Item>
      <Carousel.Item style={{ lineHeight:'30px',position: 'relative', textAlign: 'center' , backgroundColor:'#eee', paddingTop:'50px'}}>
                    <h2>Testimonials</h2>
                    <p  style={{ margin:' 20px auto',width:'60%', textAlign: 'center' }}>“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.” Maria Jones Maria Jones CEO, Co-Founder, XYZ Inc.“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                    <img src={teamimg1} alt=""  style={{ borderRadius:'50%', width:'100px' ,height:'100px' }}/>
                    <h2>giana Johny</h2>
                    <p style={{ marginBottom:' 50px ' }}>CEO, Co-Founder, XYZ Inc.</p>
      </Carousel.Item>
      
    </Carousel>
</div>
      )
    }
    
    export default Test;