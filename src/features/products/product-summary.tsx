import * as React from 'react'

export function ProductSummary(): React.ReactElement {
  return (
    <div className="flex flex-col border border-border p-3 rounded-2xl gap-3 text-sm">
      {/* version */}
      <div className="flex gap-1">
        <h3 className="flex items-center gap-1 flex-1">
          <i className="fi fi-rr-circle-small" />
          Version
        </h3>
        <span className="text-foreground/60">v1.0.0</span>
      </div>

      {/* platfroms */}
      <div className="flex gap-1">
        <h3 className="flex items-center gap-1 flex-1">
          <i className="fi fi-rr-circle-small" />
          Platform suported
        </h3>
        <span className="text-foreground/60">Framer, Webflow, NextJs</span>
      </div>

      {/* License */}
      <div className="flex gap-1">
        <h3 className="flex items-center gap-1 flex-1">
          <i className="fi fi-rr-circle-small" />
          License
        </h3>
        <span className="text-foreground/60">Commercial</span>
      </div>
    </div>
  )
}
