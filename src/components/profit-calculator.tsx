"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calculator } from 'lucide-react';

const ProfitDistributionCalculator = () => {
    const [investment, setInvestment] = useState(10000);
    const [period, setPeriod] = useState(3);

    const baseROI = period === 3 ? 5 : period === 6 ? 5.5 : 6;
    const roiCut = 0.6;
    const userROI = baseROI - roiCut;

    const platformProfitRate = 0.1;
    const ecosystemProfitRate = 0.025;
    const marketerProfitRate = 0.015;

    const userProfit = (userROI / 100) * investment;
    const platformProfit = platformProfitRate * userProfit;
    const ecosystemProfit = ecosystemProfitRate * userProfit;
    const marketerProfit = marketerProfitRate * userProfit;
    const reserveFund = userProfit > (0.1 * investment) ? userProfit - (0.1 * investment) : 0;

    const minInvestment = 1000;
    const isBelowMin = investment < minInvestment;

    const periodOptions = [
        { value: 3, label: '3 Months', roi: 5 },
        { value: 6, label: '6 Months', roi: 5.5 },
        { value: 12, label: '12 Months', roi: 6 },
    ];

    return (
        <Card className="bg-card text-foreground shadow-2xl border-border">
            <CardHeader className="flex flex-row items-center gap-4">
                <Calculator className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl font-bold">Profit Distribution Calculator</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="grid md:grid-cols-5 gap-6 items-start">
                    <div className="md:col-span-3 space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="investment">Investment Amount ($):</Label>
                            <Input
                                id="investment"
                                type="number"
                                min={minInvestment}
                                value={investment}
                                onChange={(e) => setInvestment(parseFloat(e.target.value) || 0)}
                                className="bg-background border-primary/50"
                            />
                            {isBelowMin && (
                                <p className="text-sm text-destructive">Minimum investment is $1,000</p>
                            )}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="period">Investment Period:</Label>
                            <Select value={String(period)} onValueChange={(value) => setPeriod(parseInt(value))}>
                                <SelectTrigger id="period" className="bg-background border-primary/50">
                                    <SelectValue placeholder="Select period" />
                                </SelectTrigger>
                                <SelectContent>
                                    {periodOptions.map(opt => (
                                        <SelectItem key={opt.value} value={String(opt.value)}>
                                            {opt.label} ({opt.roi}% ROI)
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="md:col-span-2 text-center bg-background/50 rounded-lg p-4 flex flex-col justify-center items-center h-full">
                        <h3 className="text-muted-foreground text-sm">Total Profit for User:</h3>
                        <p className="text-4xl font-bold text-foreground mt-2">${userProfit.toFixed(2)}</p>
                    </div>
                </div>

                <Separator className="bg-border/50" />

                <div>
                    <h2 className="text-xl font-bold mb-4">Profit Breakdown</h2>
                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center border-b border-dashed border-border/30 pb-3">
                            <span>User ROI:</span>
                            <span className="text-right">
                                <span className="font-semibold">${userProfit.toFixed(2)}</span>
                                <small className="block text-muted-foreground">({userROI.toFixed(1)}% ROI, after 0.6% cut, excluding fees)</small>
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-border/30 pb-3">
                            <span>Platform Profit:</span>
                            <span className="text-right">
                                <span className="font-semibold">${platformProfit.toFixed(2)}</span>
                                <small className="block text-muted-foreground">(10% of User ROI)</small>
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-border/30 pb-3">
                            <span>Mrmint Ecosystem Profit:</span>
                            <span className="text-right">
                                <span className="font-semibold">${ecosystemProfit.toFixed(2)}</span>
                                <small className="block text-muted-foreground">(2.5% of User ROI)</small>
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-border/30 pb-3">
                            <span>Marketer Profit:</span>
                            <span className="text-right">
                                <span className="font-semibold">${marketerProfit.toFixed(2)}</span>
                                <small className="block text-muted-foreground">(1.5% of User ROI)</small>
                            </span>
                        </div>
                        <div className="flex justify-between items-center border-b border-dashed border-border/30 pb-3">
                            <span>Reserve Fund:</span>
                            <span className="text-right">
                                <span className="font-semibold">${reserveFund.toFixed(2)}</span>
                                <small className="block text-muted-foreground">(Surplus Above 10%)</small>
                            </span>
                        </div>
                    </div>
                </div>
                
                <div className="bg-background/50 border border-border/50 rounded-lg p-4 text-sm space-y-1 mt-4">
                    <p><b>Minimum Investment:</b> $1,000 per user</p>
                    <p><b>Minimum Capital Lock-in:</b> 3 Months</p>
                    <p><b>Note:</b> ROI for each period is after a 0.6% cut as per policy.</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProfitDistributionCalculator;
