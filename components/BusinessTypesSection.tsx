"use client";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { useRouter } from "next/navigation";
import { 
  Home, 
  UtensilsCrossed, 
  Scissors, 
  Wrench,
  ArrowRight,
  Sparkles,
  UserCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function BusinessTypesSection() {
  const { t } = useTranslation();
  const router = useRouter();

  const businessTypes = [
    {
      id: "real-estate",
      icon: Home,
      titleKey: "appTypeRealEstate",
      descKey: "appTypeRealEstateDesc",
      route: "/real-estate",
      color: "from-blue-500/20 to-purple-500/20",
      iconColor: "text-blue-400"
    },
    {
      id: "restaurant",
      icon: UtensilsCrossed,
      titleKey: "appTypeRestaurants",
      descKey: "appTypeRestaurantsDesc",
      route: "/restaurant",
      color: "from-red-500/20 to-orange-500/20",
      iconColor: "text-red-400"
    },
    {
      id: "beauty-salon",
      icon: Scissors,
      titleKey: "appTypeSalon",
      descKey: "appTypeSalonDesc",
      route: "/beauty-salon",
      color: "from-pink-500/20 to-rose-500/20",
      iconColor: "text-pink-400"
    },
    {
      id: "it-support",
      icon: Wrench,
      titleKey: "appTypeITSupport",
      descKey: "appTypeITSupportDesc",
      route: "/it-support",
      color: "from-green-500/20 to-emerald-500/20",
      iconColor: "text-green-400"
    },
    {
      id: "barbershop",
      icon: UserCircle,
      titleKey: "appTypeBarbershop",
      descKey: "appTypeBarbershopDesc",
      route: "/barbershop",
      color: "from-amber-500/20 to-yellow-500/20",
      iconColor: "text-amber-400"
    }
  ];

  const handleClick = (route: string) => {
    router.push(route);
  };

  return (
    <section className="relative py-24 px-6 overflow-x-hidden w-full max-w-full bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8 text-[#B60238]" />
            <h2 className="text-4xl font-bold">Explore Our Solutions</h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover detailed features and capabilities for each business type
          </p>
        </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {businessTypes.map((business, i) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleClick(business.route)}
              >
                <Card className="bg-[#151513] border-[#2a2a2a] h-full hover:border-[#B60238]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#B60238]/10">
                  <CardHeader className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${business.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-8 h-8 ${business.iconColor}`} />
                      </div>
                      <CardTitle className="text-xl mb-2 group-hover:text-[#B60238] transition-colors">
                        {t(business.titleKey)}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm line-clamp-3">
                        {t(business.descKey)}
                      </CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-[#B60238]/10 group-hover:text-[#B60238] transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClick(business.route);
                      }}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

