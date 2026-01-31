"use client";

import React from 'react';

export default function Maps() {
    return (
        <div className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative bg-gray-100">
            {/* Use basic embed with address query */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.281855909246!2d28.970222376516353!3d41.06282857134316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7650656bd63%3A0x8ca409d6c6e7552!2sHalil%20R%C4%B1fat%20Pa%C5%9Fa%20Mesleki%20ve%20Teknik%20Anadolu%20Lisesi!5e0!3m2!1str!2str!4v1706275815123!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0%)' }} // Removed grayscale for now, or can add grayscale(100%) for style
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
            ></iframe>
        </div>
    );
}