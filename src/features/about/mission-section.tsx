import * as React from 'react'

export function MissionSection(): React.ReactElement {
  return (
    <section className="flex flex-col">
      <span className="text-foreground/60 text-lg">Mission and guidance.</span>
      <h2 className="text-xl font-medium text-balance mt-1">
        Creevoo help you craft websites faster and easier.
      </h2>

      <span className="border-b-2 border-border border-dashed mt-6" />

      <div className="flex flex-col gap-6 mt-10 text-foreground/60 leading-relaxed!">
        <p>
          Our mission is to help you{' '}
          <span className="text-foreground">
            craft websites faster and easier
          </span>{' '}
          for all designers and developers in any level of experience. Our
          templates enhance workflows, enabling efficient creation of
          <span className="text-foreground">exceptional websites.</span>
        </p>
        <p>
          With user friendly interfaces, interactions, animations and high score
          performance, we guide you to make a wonderful website{' '}
          <span className="text-foreground">in just a few minutes</span>. Now
          you can produce more websites with ease without thinking too much on
          design.
        </p>
        <p>
          We working hard to ensure all templates working on any specific
          adjustment that have a perfect pixel and same design across different
          platforms.
        </p>
      </div>
    </section>
  )
}
