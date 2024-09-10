import React from "react";
import { Typography } from "@mui/material";

const MUITypography: React.FC = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">subtitle 1</Typography>
      <Typography variant="subtitle2">subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur hic possimus beatae, porro quidem accusantium recusandae voluptatem reiciendis, eum adipisci impedit, quaerat iste fugiat
        minus aspernatur veritatis officia excepturi totam!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, maxime similique beatae, ipsa quis enim ullam commodi cum vel optio tempore possimus voluptates alias animi delectus vero
        iure consequuntur repellendus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis recusandae deserunt laborum ipsum fugiat repellat quod esse corrupti illum nobis eum
        reprehenderit aspernatur non harum itaque, voluptas, obcaecati, delectus est.
      </Typography>
    </div>
  );
};

export default MUITypography;
