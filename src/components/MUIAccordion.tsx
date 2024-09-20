import React, { useState } from "react";
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";

const MUIAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion expanded={expanded === "panel1"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}>
        <AccordionSummary id="panel1-header" aria-controls="panel1-content" expandIcon={<ExpandMore />}>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit eveniet architecto quod neque porro distinctio autem pariatur totam itaque omnis facere vitae quam eligendi
            dolores, iure error at voluptatum?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}>
        <AccordionSummary id="panel2-header" aria-controls="panel2-content" expandIcon={<ExpandMore />}>
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit eveniet architecto quod neque porro distinctio autem pariatur totam itaque omnis facere vitae quam eligendi
            dolores, iure error at voluptatum?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel3"} onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}>
        <AccordionSummary id="panel3-header" aria-controls="panel3-content" expandIcon={<ExpandMore />}>
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odit eveniet architecto quod neque porro distinctio autem pariatur totam itaque omnis facere vitae quam eligendi
            dolores, iure error at voluptatum?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MUIAccordion;
