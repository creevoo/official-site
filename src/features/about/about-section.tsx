import * as React from 'react'

export function AboutSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <span className="text-foreground/60 text-lg">Who we are?</span>
      <h2 className="text-xl font-medium text-balance mt-1">
        Shaping the future templates.
      </h2>

      <span className="border-b-2 border-border border-dashed mt-6" />

      <div className="flex flex-col gap-6 mt-10 text-foreground/60 leading-relaxed!">
        <p>
          Creevoo is a team of{' '}
          <span className="text-foreground">designers and developers</span> who
          are passionate about creating beautiful and functional{' '}
          <span className="text-foreground">website templates</span>. We believe
          that design should be accessible to everyone, regardless of their
          skill level or experience.
        </p>
        <p>
          What's unique about our templates is that they are designed to be
          accessible and <span className="text-foreground">easy to use</span>.
          We've taken the time to ensure that our templates are optimized for
          all devices, including desktops, laptops, tablets, and smartphones.
        </p>
        <p>
          Also crafting a template that{' '}
          <span className="text-foreground">work on different platforms</span>{' '}
          that mostly designer and developers used. We offer{' '}
          <span className="text-foreground">flexibility</span> to choose where
          the template will be used and deployed. Currently we support Framer,
          Figma, React, NextJs, Webflow to adapt with our templates out of the
          box.
        </p>
        <p>
          We've recently added a new feature that gives you access to over{' '}
          <span className="text-foreground">10 free design pieces</span> and
          many professional-grade layouts in our React version. This means you
          can easily use our designs in your{' '}
          <span className="text-foreground">coding projects too</span>
          c.
        </p>

        <p>
          With the templates, we aim to{' '}
          <span className="text-foreground">make design easier and better</span>{' '}
          for everyone, whether you're a beginner or an expert.
        </p>
      </div>

      <div className="flex flex-col mt-10 gap-1">
        <span className="font-medium">Creevoo Design Team</span>
        <p className="font-mono text-xs text-foreground/40 font-medium">
          Stunning website templates
        </p>
      </div>
    </section>
  )
}
