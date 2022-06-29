import "./about.css";

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='a-card bg'></div>
        <div className='a-card'>
          <img
            src='https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt=''
            className='a-img'
          />
        </div>
      </div>
      <div className='a-right'>
        <h1 className='a-title'>About Me</h1>

        <p className='a-desc'>
          I am a frontend web developer with a passion for bringing your design
          ideas and coding them to life. I’m a Self-motivated learner with
          strong organisation, time management, communication and problem
          solving skills. Able to work independently and collaboratively in a
          team, and work in a fast-paced setting with a meticulous attention to
          detail.
        </p>
      </div>
    </div>
  );
};

export default About;
