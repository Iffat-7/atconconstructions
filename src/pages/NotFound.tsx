import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-8xl font-heading font-bold text-accent mb-4">404</h1>
            <h2 className="text-3xl font-heading font-semibold text-foreground mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Button variant="gold" size="lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
