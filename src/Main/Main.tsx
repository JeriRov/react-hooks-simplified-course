import React, { FC, useEffect, useState } from 'react';

import { RenderLinks } from '../RenderLinks/RenderLinks';
import { RoutesParams } from '../RenderLinks/renderLinks.types';
import { router } from '../router';

export const Main: FC = () => {
  const [routes, setRoutes] = useState<RoutesParams[]>();

  useEffect(() => {
    setRoutes(Object.values(router).filter(item => item.hook));
  }, []);

  return (
    <div>
      <RenderLinks routes={routes} />
    </div>
  );
};
