import { NextResponse } from "next/server";
import { saveAnalyticsReferer } from "./utils/firebase";


export async function middleware(req){
    const referer = req.headers.get("referer") || req.headers.referer || "no-referer";
    const userAgent = req.headers.get("user-agent");
    const path = req.nextUrl.pathname;

    
    if(isInvalidReferer(referer)){
        return NextResponse.next();
    }

    if(isInvalidPath(path)){
        return NextResponse.next();
    }

    const data = {
        from: getRefererSiteName(referer),
        path: path,
        plataform: getPlataformName(userAgent),
    }

    await saveAnalyticsReferer(data);
    
    console.log(data);

    return NextResponse.next()
}

export const config = {
    matcher: "/:path"
}

function isInvalidPath(path){
    const invalidPaths = ["static", "api", "_next", "favicon.ico", "manifest.json", "robots.txt"];
    return invalidPaths.includes(path);
}

function isInvalidReferer(referer){
    if(referer === "no-referer") return true;
    const invalidPaths = ["localhost", "vgapp.com.br", ".projects.vercel.app"];
    referer = new URL(referer).hostname;
    return invalidPaths.includes(referer);
}

function getRefererSiteName(referer){
    const url = new URL(referer).hostname;
    return url.replaceAll(".", "-");
}

export function getPlataformName(userAgent) {
    if (!userAgent) {
      return "Unknown";
    }
  
    userAgent = userAgent.toLowerCase();
  
    if (/android/.test(userAgent)) {
      return "Android";
    } else if (/iphone|ipad|ipod/.test(userAgent)) {
      return "iOS";
    } else if (/linux/.test(userAgent)) {
      return "Linux";
    } else if (/windows/.test(userAgent)) {
      return "Windows";
    } else {
      return "Other";
    }
  }
  