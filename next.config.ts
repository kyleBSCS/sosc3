import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.unco.edu",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
      },
      {
        protocol: "https",
        hostname: "cdn.cfr.org",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "cz.usembassy.gov",
      },
      {
        protocol: "https",
        hostname: "sam.nmartmuseum.org",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "thumbs.dreamstime.com",
      },
      {
        protocol: "https",
        hostname: "therevealer.org",
      },
      {
        protocol: "https",
        hostname: "equaliteach.co.uk",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "www.wikihow.com",
      },
      {
        protocol:"https",
        hostname:"media.craiyon.com",
      },
      {
        protocol: "https",

        hostname: "cdn.std.uw.edu",
      },
      {
        protocol: "https",
        hostname: "img.medscapestatic.com",
      },
      {
        protocol: "https",
        hostname: "images.everydayhealth.com",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
      {
        protocol: "https",
        hostname: "www.verywellhealth.com",
      },
      {
        protocol: "https",
        hostname: "almostadoctor.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.hepb.org",
      },
    ],
  },
};

export default nextConfig;
