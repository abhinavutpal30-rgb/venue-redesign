import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Users, Calendar, IndianRupee, CheckSquare, Percent, Plus, Trash2, ChevronDown, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { downloadBudgetPdf, downloadChecklistPdf, downloadGuestEstimatePdf } from "@/lib/planningPdf";

// Budget Calculator
const defaultBudgetItems = [
  { id: 1, category: "Venue", amount: 200000, paid: 0 },
  { id: 2, category: "Catering", amount: 150000, paid: 0 },
  { id: 3, category: "Photography", amount: 35000, paid: 0 },
  { id: 4, category: "Videography", amount: 45000, paid: 0 },
  { id: 5, category: "Decoration", amount: 60000, paid: 0 },
  { id: 6, category: "DJ & Music", amount: 20000, paid: 0 },
  { id: 7, category: "Bridal Makeup", amount: 15000, paid: 0 },
  { id: 8, category: "Invitations", amount: 10000, paid: 0 },
  { id: 9, category: "Clothing & Jewellery", amount: 100000, paid: 0 },
  { id: 10, category: "Miscellaneous", amount: 50000, paid: 0 },
];

// Checklist
const defaultChecklist = [
  { id: 1, task: "Finalize wedding date", months: "12", done: false },
  { id: 2, task: "Set total budget", months: "12", done: false },
  { id: 3, task: "Create guest list", months: "10-12", done: false },
  { id: 4, task: "Book venue", months: "10-12", done: false },
  { id: 5, task: "Book photographer & videographer", months: "8-10", done: false },
  { id: 6, task: "Book caterer / finalize menu", months: "6-8", done: false },
  { id: 7, task: "Order wedding invitations", months: "6", done: false },
  { id: 8, task: "Book DJ / band / entertainment", months: "6", done: false },
  { id: 9, task: "Bridal outfit shopping", months: "4-6", done: false },
  { id: 10, task: "Book makeup artist", months: "4", done: false },
  { id: 11, task: "Finalize decoration theme", months: "3-4", done: false },
  { id: 12, task: "Send out invitations", months: "2-3", done: false },
  { id: 13, task: "Final venue walkthrough", months: "1", done: false },
  { id: 14, task: "Confirm all vendor bookings", months: "1", done: false },
  { id: 15, task: "Mehendi & Haldi arrangement", months: "0.5", done: false },
  { id: 16, task: "Final dress fitting", months: "0.5", done: false },
];

// Guest Estimator
const mealCosts = { basic: 600, standard: 1000, premium: 1500, luxury: 2000 };

const tools = [
  { id: "budget", label: "Budget Planner", icon: Calculator, desc: "Track expenses and manage your wedding budget" },
  { id: "checklist", label: "Wedding Checklist", icon: CheckSquare, desc: "Never miss a task with our month-wise checklist" },
  { id: "guest", label: "Guest & Cost Estimator", icon: Users, desc: "Estimate total cost based on guest count and meal type" },
];

const PlanningTools = () => {
  const [activeTool, setActiveTool] = useState("budget");

  // Budget state
  const [budgetItems, setBudgetItems] = useState(defaultBudgetItems);
  const [newCategory, setNewCategory] = useState("");
  const [newAmount, setNewAmount] = useState("");

  // Checklist state
  const [checklist, setChecklist] = useState(defaultChecklist);

  // Guest estimator state
  const [guestCount, setGuestCount] = useState(300);
  const [mealType, setMealType] = useState<keyof typeof mealCosts>("standard");

  // Budget calculations
  const totalBudget = budgetItems.reduce((s, i) => s + i.amount, 0);
  const totalPaid = budgetItems.reduce((s, i) => s + i.paid, 0);
  const remaining = totalBudget - totalPaid;

  const addBudgetItem = () => {
    if (!newCategory || !newAmount) return;
    setBudgetItems([...budgetItems, { id: Date.now(), category: newCategory, amount: Number(newAmount), paid: 0 }]);
    setNewCategory("");
    setNewAmount("");
  };

  const updatePaid = (id: number, paid: number) => {
    setBudgetItems(budgetItems.map((i) => (i.id === id ? { ...i, paid } : i)));
  };

  const removeBudgetItem = (id: number) => {
    setBudgetItems(budgetItems.filter((i) => i.id !== id));
  };

  // Checklist calculations
  const completedTasks = checklist.filter((t) => t.done).length;
  const toggleTask = (id: number) => {
    setChecklist(checklist.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  // Guest estimator calculations
  const estimatedCateringCost = guestCount * mealCosts[mealType];
  const estimatedVenueCost = guestCount <= 300 ? 150000 : guestCount <= 600 ? 250000 : 400000;
  const estimatedDecorationCost = guestCount <= 300 ? 50000 : guestCount <= 600 ? 80000 : 120000;
  const estimatedTotalCost = estimatedCateringCost + estimatedVenueCost + estimatedDecorationCost;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 gradient-wine-deep opacity-95" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, hsl(38 70% 55%), transparent 50%)" }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
            Planning Tools
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-primary-foreground/70 font-body text-base md:text-lg max-w-2xl mx-auto">
            Free tools to plan your perfect wedding — budget tracker, checklist, and cost estimator.
          </motion.p>
        </div>
      </section>

      {/* Tool Selector */}
      <section className="max-w-5xl mx-auto px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <button
              key={tool.id}
              onClick={() => setActiveTool(tool.id)}
              className={`p-5 rounded-2xl border text-left transition-all ${
                activeTool === tool.id
                  ? "gradient-gold text-accent-foreground shadow-gold border-transparent"
                  : "bg-card border-border/50 hover:shadow-elevated"
              }`}
            >
              <tool.icon className={`w-6 h-6 mb-2 ${activeTool === tool.id ? "text-accent-foreground" : "text-accent"}`} />
              <h3 className={`font-display font-bold text-sm mb-1 ${activeTool === tool.id ? "text-accent-foreground" : "text-foreground"}`}>{tool.label}</h3>
              <p className={`font-body text-xs ${activeTool === tool.id ? "text-accent-foreground/80" : "text-muted-foreground"}`}>{tool.desc}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Tool Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">

        {/* BUDGET PLANNER */}
        {activeTool === "budget" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-card rounded-2xl border border-border/50 p-5">
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Budget</p>
                <p className="font-display text-2xl font-bold text-foreground">₹{totalBudget.toLocaleString("en-IN")}</p>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-5">
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">Total Paid</p>
                <p className="font-display text-2xl font-bold text-accent">₹{totalPaid.toLocaleString("en-IN")}</p>
                <div className="mt-2 h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full gradient-gold rounded-full transition-all" style={{ width: `${totalBudget > 0 ? (totalPaid / totalBudget) * 100 : 0}%` }} />
                </div>
              </div>
              <div className="gradient-wine-deep rounded-2xl p-5">
                <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Remaining</p>
                <p className="font-display text-2xl font-bold text-primary-foreground">₹{remaining.toLocaleString("en-IN")}</p>
              </div>
            </div>

            {/* Budget Items */}
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden">
              <div className="p-4 border-b border-border/30 grid grid-cols-12 gap-2 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <span className="col-span-4">Category</span>
                <span className="col-span-3">Estimated</span>
                <span className="col-span-3">Paid</span>
                <span className="col-span-2"></span>
              </div>
              {budgetItems.map((item) => (
                <div key={item.id} className="p-4 border-b border-border/30 grid grid-cols-12 gap-2 items-center">
                  <span className="col-span-4 font-body text-sm font-semibold text-foreground">{item.category}</span>
                  <span className="col-span-3 font-body text-sm text-foreground">₹{item.amount.toLocaleString("en-IN")}</span>
                  <div className="col-span-3">
                    <input
                      type="number"
                      value={item.paid || ""}
                      onChange={(e) => updatePaid(item.id, Number(e.target.value))}
                      placeholder="0"
                      className="w-full px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/30"
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button onClick={() => removeBudgetItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
              {/* Add New */}
              <div className="p-4 grid grid-cols-12 gap-2 items-center bg-secondary/20">
                <div className="col-span-4">
                  <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="New category" className="w-full px-3 py-1.5 rounded-lg bg-background border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div className="col-span-3">
                  <input value={newAmount} onChange={(e) => setNewAmount(e.target.value)} type="number" placeholder="Amount" className="w-full px-3 py-1.5 rounded-lg bg-background border border-border/50 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30" />
                </div>
                <div className="col-span-5">
                  <button onClick={addBudgetItem} className="flex items-center gap-1 gradient-gold text-accent-foreground px-4 py-1.5 rounded-lg text-sm font-body font-semibold hover:opacity-90 transition-opacity">
                    <Plus className="w-4 h-4" /> Add
                  </button>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => downloadBudgetPdf(budgetItems)}
                className="flex items-center gap-2 gradient-wine-deep text-primary-foreground px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity shadow-elevated"
              >
                <Download className="w-5 h-5" /> Download Budget as PDF
              </button>
            </div>
          </motion.div>
        )}

        {/* WEDDING CHECKLIST */}
        {activeTool === "checklist" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            {/* Progress */}
            <div className="bg-card rounded-2xl border border-border/50 p-6 mb-8">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-display text-lg font-bold text-foreground">Wedding Checklist</p>
                  <p className="font-body text-sm text-muted-foreground">{completedTasks} of {checklist.length} tasks completed</p>
                </div>
                <div className="flex items-center gap-2">
                  <Percent className="w-4 h-4 text-accent" />
                  <span className="font-display text-2xl font-bold text-foreground">{Math.round((completedTasks / checklist.length) * 100)}%</span>
                </div>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  className="h-full gradient-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(completedTasks / checklist.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Tasks */}
            <div className="space-y-2">
              {checklist.map((task, i) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.02 }}
                  onClick={() => toggleTask(task.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                    task.done
                      ? "bg-accent/5 border-accent/20"
                      : "bg-card border-border/30 hover:shadow-md"
                  }`}
                >
                  <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
                    task.done ? "bg-accent border-accent" : "border-border"
                  }`}>
                    {task.done && <CheckSquare className="w-4 h-4 text-accent-foreground" />}
                  </div>
                  <div className="flex-1">
                    <p className={`font-body text-sm font-semibold transition-all ${task.done ? "line-through text-muted-foreground" : "text-foreground"}`}>{task.task}</p>
                  </div>
                  <span className={`text-xs font-body px-2.5 py-1 rounded-full shrink-0 ${
                    task.done ? "bg-accent/10 text-accent" : "bg-secondary text-muted-foreground"
                  }`}>
                    <Calendar className="w-3 h-3 inline mr-1" />{task.months} months before
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => downloadChecklistPdf(checklist)}
                className="flex items-center gap-2 gradient-wine-deep text-primary-foreground px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity shadow-elevated"
              >
                <Download className="w-5 h-5" /> Download Checklist as PDF
              </button>
            </div>
          </motion.div>
        )}

        {/* GUEST & COST ESTIMATOR */}
        {activeTool === "guest" && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Controls */}
              <div className="space-y-6">
                <div className="bg-card rounded-2xl border border-border/50 p-6">
                  <h3 className="font-display font-bold text-foreground mb-4">Guest Count</h3>
                  <div className="flex items-center gap-4">
                    <input
                      type="range"
                      min="50"
                      max="2000"
                      step="50"
                      value={guestCount}
                      onChange={(e) => setGuestCount(Number(e.target.value))}
                      className="flex-1 accent-accent"
                    />
                    <div className="bg-secondary rounded-xl px-4 py-2 min-w-[80px] text-center">
                      <span className="font-display text-xl font-bold text-foreground">{guestCount}</span>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs font-body text-muted-foreground mt-1">
                    <span>50</span><span>2000</span>
                  </div>
                </div>

                <div className="bg-card rounded-2xl border border-border/50 p-6">
                  <h3 className="font-display font-bold text-foreground mb-4">Meal Type</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {(Object.entries(mealCosts) as [keyof typeof mealCosts, number][]).map(([type, cost]) => (
                      <button
                        key={type}
                        onClick={() => setMealType(type)}
                        className={`p-4 rounded-xl border text-left transition-all ${
                          mealType === type
                            ? "gradient-gold text-accent-foreground border-transparent shadow-gold"
                            : "bg-secondary/30 border-border/50 hover:bg-secondary/50"
                        }`}
                      >
                        <p className={`font-body text-sm font-bold capitalize ${mealType === type ? "text-accent-foreground" : "text-foreground"}`}>{type}</p>
                        <p className={`font-body text-xs ${mealType === type ? "text-accent-foreground/80" : "text-muted-foreground"}`}>₹{cost}/plate</p>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-4">
                <div className="gradient-wine-deep rounded-2xl p-6 text-primary-foreground">
                  <p className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mb-1">Estimated Total Cost</p>
                  <p className="font-display text-3xl md:text-4xl font-bold">₹{estimatedTotalCost.toLocaleString("en-IN")}</p>
                  <p className="font-body text-xs text-primary-foreground/60 mt-1">for {guestCount} guests with {mealType} menu</p>
                </div>

                <div className="bg-card rounded-2xl border border-border/50 p-5 space-y-4">
                  <h3 className="font-display font-bold text-foreground text-sm">Cost Breakdown</h3>

                  {[
                    { label: "Catering", value: estimatedCateringCost, percent: (estimatedCateringCost / estimatedTotalCost) * 100 },
                    { label: "Venue", value: estimatedVenueCost, percent: (estimatedVenueCost / estimatedTotalCost) * 100 },
                    { label: "Decoration", value: estimatedDecorationCost, percent: (estimatedDecorationCost / estimatedTotalCost) * 100 },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between mb-1">
                        <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-body text-sm font-bold text-foreground">₹{item.value.toLocaleString("en-IN")}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full gradient-gold rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percent}%` }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-body text-xs text-muted-foreground text-center italic">
                  * Estimates are approximate and based on average market rates in Patna & Kolkata. Actual costs may vary.
                </p>

                {/* Download Button */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => downloadGuestEstimatePdf(guestCount, mealType, estimatedCateringCost, estimatedVenueCost, estimatedDecorationCost, estimatedTotalCost)}
                    className="flex items-center gap-2 gradient-wine-deep text-primary-foreground px-6 py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity shadow-elevated"
                  >
                    <Download className="w-5 h-5" /> Download Estimate as PDF
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default PlanningTools;
