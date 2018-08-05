import React from 'react';
import { Switch } from '../components/Switch';
// Switch is a component that takes two props: on & onClick

/**
 * Implements a toggle (SimpleToggle) that that the following props:
 * - defaultOn - the toggle is on by default
 * - onToggle: (on) => void - the callback when the toggle state is changed
 * The toggle should just render a toggle button
 */

export const Usage = () => (
  <div>
    <h1>Simple Toggle </h1>
    {/* <SimpleToggle onToggle={on => console.info({ on })} /> */}
  </div>
);
