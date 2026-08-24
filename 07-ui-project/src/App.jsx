import React from 'react'
import Section1 from './components/Section1/Section1';
import Section2 from './components/Section2/Section2'


const App = () => {

const users=[
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Satisfied'
  },
  {
   img:'https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=is&k=20&c=qoSqKizQmeP0RByR-ARGs6W7JqVkNO17LlnXG_l6sc0=',
   intro:'',
   tag:'UnderBanked'
  },

   {
   img:'https://media.istockphoto.com/id/2225031969/photo/portrait-smile-and-confident-business-woman-in-corporate-office-for-ambition-finance-or.jpg?s=612x612&w=0&k=20&c=C73QwUmtGE_hwKkjo3oeZLX25DpxvJNTmzXTZoFJHD4=',
   intro:'',
   tag:'Satisfied'
  },

   {
   img:'https://media.istockphoto.com/id/1310814041/photo/portrait-of-a-businesswoman-standing-in-a-a-modern-office.jpg?s=612x612&w=0&k=20&c=rLDYEGaGfbFq6mJPLc2FHjc6KBKyJETu38y4a3x11cM=',
   intro:'',
   tag:'Underserved'
  },
]



  return (
    <div>
      <Section1 user={users} />
      <Section2 />
     
    </div>
  );
}

export default App
