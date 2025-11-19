import { useState } from "react";

export default function ROICalculator() {
  const [inputs, setInputs] = useState({
    technicians: 5,
    jobsPerWeek: 20,
    paperworkHoursPerJob: 0.5,
    hourlyRate: 35,
  });

  const handleChange = (field, value) => {
    setInputs((prev) => ({
      ...prev,
      [field]: parseFloat(value) || 0,
    }));
  };

  // Format numbers with commas
  const formatNumber = (num) => {
    return parseFloat(num).toLocaleString("en-US");
  };

  // Calculate ROI
  const calculateROI = () => {
    const { technicians, jobsPerWeek, paperworkHoursPerJob, hourlyRate } =
      inputs;

    // Rung saves 70% of paperwork time by automating job documentation
    const paperworkSaved = paperworkHoursPerJob * 0.7;
    const totalHoursSavedPerJob = paperworkSaved;

    // Weekly calculations
    const totalJobsPerWeek = technicians * jobsPerWeek;
    const hoursSavedPerWeek = totalJobsPerWeek * totalHoursSavedPerJob;
    const costSavedPerWeek = hoursSavedPerWeek * hourlyRate;

    // Annual calculations
    const hoursSavedPerYear = hoursSavedPerWeek * 52;
    const costSavedPerYear = costSavedPerWeek * 52;

    // Monthly subscription cost
    const monthlyCost = technicians * 50; // $50 per tech per month
    const annualCost = monthlyCost * 12;

    const netSavings = costSavedPerYear - annualCost;
    const roiPercentage = annualCost > 0 ? (netSavings / annualCost) * 100 : 0;
    const paybackMonths =
      annualCost > 0 ? (annualCost / costSavedPerWeek / 4.33).toFixed(1) : 0;

    return {
      paperworkSaved: paperworkSaved.toFixed(2),
      totalJobsPerWeek: totalJobsPerWeek,
      hoursSavedPerWeek: hoursSavedPerWeek.toFixed(1),
      hoursSavedPerYear: hoursSavedPerYear.toFixed(0),
      costSavedPerWeek: costSavedPerWeek.toFixed(0),
      costSavedPerYear: costSavedPerYear.toFixed(0),
      annualCost: annualCost.toFixed(0),
      netSavings: netSavings.toFixed(0),
      roiPercentage: roiPercentage.toFixed(0),
      paybackMonths: paybackMonths,
    };
  };

  const results = calculateROI();

  return (
    <>
      <style>{`
        input[type="range"] {
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          cursor: pointer;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          margin-top: -6px;
        }
        input[type="range"]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: none;
        }
        input[type="range"]::-webkit-slider-runnable-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
        }
        input[type="range"]::-moz-range-track {
          height: 8px;
          background: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
              Calculate Your ROI
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
              See how much time and money Rung can save your team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Input Section */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Your Current Setup
              </h3>

              <div className="bg-white/90 rounded-2xl border border-black/10 p-6 shadow-lg flex-1 flex flex-col">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Number of Technicians
                      </label>
                      <span className="text-lg font-bold text-black">
                        {formatNumber(inputs.technicians)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={inputs.technicians}
                      onChange={(e) =>
                        handleChange("technicians", e.target.value)
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Jobs per Week (per technician)
                      </label>
                      <span className="text-lg font-bold text-black">
                        {formatNumber(inputs.jobsPerWeek)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={inputs.jobsPerWeek}
                      onChange={(e) =>
                        handleChange("jobsPerWeek", e.target.value)
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Hours Spent on Paperwork per Job
                      </label>
                      <span className="text-lg font-bold text-black">
                        {inputs.paperworkHoursPerJob.toFixed(1)}h
                      </span>
                    </div>
                    <input
                      type="range"
                      step="0.1"
                      min="0"
                      max="1.5"
                      value={inputs.paperworkHoursPerJob}
                      onChange={(e) =>
                        handleChange("paperworkHoursPerJob", e.target.value)
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-medium text-gray-700">
                        Average Hourly Rate ($)
                      </label>
                      <span className="text-lg font-bold text-black">
                        ${formatNumber(inputs.hourlyRate)}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      value={inputs.hourlyRate}
                      onChange={(e) =>
                        handleChange("hourlyRate", e.target.value)
                      }
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Your Savings
              </h3>

              <div className="bg-white/90 rounded-2xl border border-black/10 p-6 shadow-lg flex-1 flex flex-col">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hours Saved per Week</span>
                    <span className="text-2xl font-bold text-black">
                      {formatNumber(results.hoursSavedPerWeek)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Hours Saved per Year</span>
                    <span className="text-2xl font-bold text-black">
                      {formatNumber(results.hoursSavedPerYear)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Cost Saved per Week</span>
                      <span className="text-xl font-semibold text-green-600">
                        ${formatNumber(results.costSavedPerWeek)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Cost Saved per Year</span>
                      <span className="text-xl font-semibold text-green-600">
                        ${formatNumber(results.costSavedPerYear)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>Annual Cost</span>
                      <span>${formatNumber(results.annualCost)}</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 font-semibold">
                        Net Annual Savings
                      </span>
                      <span className="text-3xl font-bold text-green-600">
                        ${formatNumber(results.netSavings)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Calculation Explanation */}
          <div className="mt-10 space-y-6">
            <p className="text-center text-sm text-gray-600">
              Rung automates job documentation, saving{" "}
              <span className="font-semibold text-black">70%</span> of paperwork
              time per job. Formula: (Paperwork hours × 0.7) × Jobs per week ×
              Technicians × Hourly rate
            </p>

            {/* Additional Benefits */}
            <div className="space-y-3">
              <p className="text-center text-xs text-gray-500 italic">
                Additional benefits not included in calculation above
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    Faster Access to Knowledge
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    Less Callbacks
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-xs font-medium text-gray-700">
                    Faster Jobs = More Jobs/Week
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
