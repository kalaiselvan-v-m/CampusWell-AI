import Card from "../components/common/Card";
import { FileText } from "lucide-react";

export default function Report() {
    return (
            <section className="mx-auto w-full max-w-6xl px-8 py-8 animate-fade-up">
                <Card className="flex flex-col items-center gap-4 py-20 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                        <FileText size={24} className="text-primary-dark" strokeWidth={1.75} />
                    </div>
                    <h2 className="font-display text-2xl font-medium text-ink">
                        Report
                    </h2>
                    <p className="max-w-sm text-sm text-ink-soft">
                        Your wellness report will appear here.
                    </p>
                </Card>
            </section>
    );
}
