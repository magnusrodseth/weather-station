import React from "react";
import {
  CircularGaugeComponent,
  AxesDirective,
  AxisDirective,
  PointersDirective,
  PointerDirective,
} from "@syncfusion/ej2-react-circulargauge";

const Compass = ({
  degree,
  directions,
}: {
  degree: number;
  directions: string[];
}) => {
  const START_DEGREES = 0;
  const END_DEGREES = 360;
  
  return (
    <CircularGaugeComponent>
      <AxesDirective>
        <AxisDirective
          radius="100%"
          startAngle={START_DEGREES}
          endAngle={END_DEGREES}
          minimum={START_DEGREES}
          maximum={END_DEGREES}
          majorTicks={{
            height: 15,
            interval: 30,
          }}
          lineStyle={{ width: 3 }}
          minorTicks={{
            height: 5,
            interval: 15,
          }}
          // TODO: Download and import desired fonts
          labelStyle={{
            font: {
              size: "0.8rem",
              fontFamily: "Arial",
            },
            autoAngle: true,
            hiddenLabel: "Last",
          }}
        >
          <PointersDirective>
            <PointerDirective
              value={degree}
              radius="80%"
              color="#f03e3e"
              pointerWidth={10}
              cap={{
                radius: 0,
              }}
              animation={{
                enable: true,
              }}
            />
            <PointerDirective
              value={(180 + degree) % 360}
              radius="50%"
              color="#9E9E9E"
              pointerWidth={10}
              cap={{
                radius: 0,
              }}
              animation={{
                enable: true,
              }}
            />
          </PointersDirective>
          {/* <RangesDirective>
                  <RangeDirective start={7} end={7} />
                </RangesDirective> */}
        </AxisDirective>
      </AxesDirective>
    </CircularGaugeComponent>
  );
};

export default Compass;
