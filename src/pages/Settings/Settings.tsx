import React from 'react';

import SwitchTheme from '../../components/SwitchTheme/SwitchTheme';
import { ReturnComponentType } from '../../types/ReturnComponentType';

const Settings = (): ReturnComponentType => (
  <div>
    <div>
      <SwitchTheme />
    </div>
    <div>
      <div>
        <span>Set history block visibility</span>
        <button type="button">fg</button>
      </div>
    </div>
  </div>
);

export default Settings;
