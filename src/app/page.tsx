

export default function Home() {
  return (
    <main className="flex flex-col gap-8 items-center">
      <span className="page-title bg-gradient-to-r from-transparent via-sky-300 to-transparent">Welcome to my Portfolio!</span>
      <div className="home-intro">
      <div className="paragraph">
          Here on my portfolio you can browse around on the various projects I&rsquo;ve done, 
          view my blog, see updates on different things I try, my hobbies, and 
          other things about me.
        </div>
        <div className="paragraph">
          I will be constantly updating this porfolio with different features as time goes. 
          Some of the cool features I have in mind include but are not limited to: 
          <ul>
            <li>dark/light mode toggle</li>
            <li>cool website animations for entering the website and leaving pages</li>
            <li>being added to a email list</li>
            <li>and many more coming soon</li>
          </ul>
          These features are mainly for me but some will be Quality of Life updates for new users 
          and viewers.
        </div>
      </div>
    </main>
  );
}
