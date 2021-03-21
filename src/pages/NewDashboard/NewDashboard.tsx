/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import NICSection from './sections/NICSection'
import PremiumSection from './sections/PremiumSection'
import WelcomeSection from './sections/WelcomeSection'

import {
    Chart,
    Interval,
    Axis,
    Tooltip,
    Coordinate,
    Legend,
    View,
    Annotation,
    getTheme,
} from "bizcharts";

interface Props {

}

const myContent = {
    siteCode: "电商",
    title: "注册成功率",
    percent: "66.66%",
};

const intervalConfig = {
    style: { fillOpacity: 0.6 },
    size: [
        "type",
        (type) => {
            return type === "已完成" ? 12 : 6;
        },
    ],
}

const myData = [
    { type: "已完成", percent: 0.6666 },
    { type: "待提升", percent: 0.3334 },
];

const NewDashboard = (props: Props) => {
    const brandFill = getTheme().colors10[0];
    return (
        <div className="px-3 py-4">
            <div className="flex">
                <div className="flex-1">
                    <WelcomeSection />
                </div>
                <div className="flex-1">
                    <Chart placeholder={false} height={200} padding="auto" autoFit>
                        <Legend visible={false} />
                        {/* 绘制图形 */}
                        <View
                            data={myData}
                            scale={{
                                percent: {
                                    formatter: (val) => {
                                        return (val * 100).toFixed(2) + "%";
                                    },
                                },
                            }}
                        >
                            <Coordinate type="theta" innerRadius={0.75} />
                            <Interval
                                position="percent"
                                adjust="stack"
                                // color="type"
                                // color={["type", ["rgba(100, 100, 255, 0.6)", "#eee"]]}
                                color={["type", [brandFill, "#eee"]]}
                                size={16}
                                // style={{ fillOpacity: 0.6 }}
                                // label={['type', {offset: 40}]}
                                {...intervalConfig}
                            />
                            <Annotation.Text
                                position={["50%", "35%"]}
                                content={myContent.siteCode}
                                style={{
                                    lineHeight: "240px",
                                    fontSize: "16",
                                    fill: "#000",
                                    textAlign: "center",
                                }}
                            />
                            <Annotation.Text
                                position={["50%", "48%"]}
                                content={myContent.title}
                                style={{
                                    lineHeight: "240px",
                                    fontSize: "16",
                                    fill: "#000",
                                    textAlign: "center",
                                }}
                            />
                            <Annotation.Text
                                position={["50%", "62%"]}
                                content={myContent.percent}
                                style={{
                                    lineHeight: "240px",
                                    fontSize: "24",
                                    fill: brandFill,
                                    textAlign: "center",
                                }}
                            />
                        </View>
                    </Chart>
                </div>
            </div>
            <NICSection />
            <PremiumSection />
        </div>
    )
}

export default NewDashboard
