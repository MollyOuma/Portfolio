import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 bg-white ">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Awesome Testimonials</h2>
        <p className="text-gray-600 mt-4">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
        <div className="mt-12">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={5000}
          >
            {/* Testimonial 1 */}
            <div className="flex mx-20 flex justify-around">
              <div className="w-1/3 px-2">
                <div className="rounded p-6">
                  <img className="w-2 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 1" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Musharof Chy</h3>
                      <p className="text-gray-600">Founder @ LineIcons</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="rounded p-6">
                  <img className="w-2 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 1" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Musharof Chy</h3>
                      <p className="text-gray-600">Founder @ LineIcons</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="rounded p-6">
                  <img className="w-12 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 2" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Devid Sailio</h3>
                      <p className="text-gray-600">Founder @ TailGrids</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more testimonials as needed */}
            <div className="flex mx-20 flex justify-around">
              <div className="w-1/3 px-2">
                <div className="rounded p-6">
                  <img className="w-12 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 1" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Musharof Chy</h3>
                      <p className="text-gray-600 mb-8">Founder @ LineIcons</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className=" rounded p-6">
                  <img className="w-2 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 1" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Musharof Chy</h3>
                      <p className="text-gray-600">Founder @ LineIcons</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 px-2">
                <div className="rounded p-6 ">
                  <img className="w-12 h-12 rounded-full mb-4 mx-auto" src="../ux.png" alt="User 2" />
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet tempus augue, ac venenatis lectus tempus ut. Sed sodales erat a libero.</p>
                  <div className="flex flex-col items-center mt-4">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-900">Devid Sailio</h3>
                      <p className="text-gray-600">Founder @ TailGrids</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
