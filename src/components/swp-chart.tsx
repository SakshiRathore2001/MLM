"use client"

import { Line, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const generateSimulationData = () => {
    const data = [];
    let capital = 1000;
    let cumulativeWithdrawal = 0;
    const monthlyROI = 0.054;
    const reinvestmentRate = 0.5;

    for (let month = 1; month <= 36; month++) {
        const profit = capital * monthlyROI;
        const reinvested = profit * reinvestmentRate;
        
        capital += reinvested;
        cumulativeWithdrawal += (profit - reinvested);

        data.push({
            month: `M${month}`,
            newCapital: Math.round(capital),
            cumulativeWithdrawal: Math.round(cumulativeWithdrawal),
        });
    }
    return data;
}

const simulationData = generateSimulationData();

const chartConfig = {
    newCapital: {
      label: "Capital Growth",
      color: "hsl(var(--primary))",
    },
    cumulativeWithdrawal: {
      label: "Cumulative Withdrawal",
      color: "hsl(var(--accent))",
    },
}

export default function SwpChart() {
    return (
        <ChartContainer config={chartConfig} className="h-80 w-full">
            <ResponsiveContainer>
                <LineChart data={simulationData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis 
                        dataKey="month" 
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => parseInt(value.slice(1)) % 6 === 0 ? value : ""}
                    />
                    <YAxis 
                        tickLine={false}
                        axisLine={false}
                        tickMargin={8}
                        tickFormatter={(value) => `$${value/1000}k`}
                    />
                    <Tooltip
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Legend />
                    <Line 
                        type="monotone" 
                        dataKey="newCapital" 
                        stroke="var(--color-newCapital)" 
                        strokeWidth={2}
                        dot={false}
                    />
                    <Line 
                        type="monotone" 
                        dataKey="cumulativeWithdrawal" 
                        stroke="var(--color-cumulativeWithdrawal)" 
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
}
