import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { business } from "@/data/business";
import { locations } from "@/data/locations";

const SERVICE_AREA_POLYGON: [number, number][] = business.serviceAreaPolygon;
const MAP_CENTER: [number, number] = business.mapCenter;
const MAP_ZOOM = 9;

// Approximate town centre coordinates (WGS84) — for map display, not survey-accurate.
const TOWN_COORDINATES: Record<string, [number, number]> = {
  rankinston: [55.4064, -4.4713],
  ayr: [55.4586, -4.6292],
  kilmarnock: [55.61, -4.4958],
  irvine: [55.611, -4.668],
  troon: [55.5372, -4.6597],
  prestwick: [55.4967, -4.6122],
  cumnock: [55.4597, -4.2647],
  mauchline: [55.5089, -4.3736],
  stewarton: [55.6797, -4.517],
  kilwinning: [55.6497, -4.708],
  maybole: [55.3494, -4.6875],
  galston: [55.5978, -4.3937],
};

export function AdServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        scrollWheelZoom: false,
      });

      L.default
        .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(map);

      const polygon = L.default.polygon(SERVICE_AREA_POLYGON, {
        color: "#ea580c",
        weight: 2,
        fillColor: "#ea580c",
        fillOpacity: 0.15,
      }).addTo(map);

      locations.forEach((location) => {
        const coords = TOWN_COORDINATES[location.slug];
        if (!coords) return;
        L.default
          .circleMarker(coords, {
            radius: 6,
            color: "#ffffff",
            weight: 2,
            fillColor: "#ea580c",
            fillOpacity: 1,
          })
          .addTo(map)
          .bindTooltip(location.name, {
            permanent: true,
            direction: "top",
            offset: [0, -6],
            className: "town-label",
          });
      });

      map.fitBounds(polygon.getBounds(), { padding: [24, 24] });
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-[360px] md:h-[440px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 [&_.leaflet-control]:!z-[100] [&_.leaflet-pane]:!z-[1] [&_.town-label]:!bg-white [&_.town-label]:!border-none [&_.town-label]:!rounded [&_.town-label]:!px-1.5 [&_.town-label]:!py-0.5 [&_.town-label]:!text-xs [&_.town-label]:!font-semibold [&_.town-label]:!shadow-sm"
      aria-label={`Map showing ${business.alternateName} service area across ${business.region}`}
    />
  );
}
