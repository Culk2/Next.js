import { Card } from '@/app/ui/dashboard/aboutus';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CardsSkeleton } from '@/app/ui/skeletons';
import CardWrapper from '@/app/ui/dashboard/aboutus';

 

export default async function Page() {


  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Contacts
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>

      </div>
        <div className="rounded-xl overflow-hidden shadow-sm col-span-2 lg:col-span-3 bg-gray-50">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Trg+Mladosti+7,+Velenje,+Slovenia&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
        <div>
            <form className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Contact Us</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input className="w-full px-3 py-2 border rounded-md" type="email" id="email" name="email" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea className="w-full px-3 py-2 border rounded-md" id="message" name="message" rows={4} required></textarea>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" type="submit">Send</button>
            </form>
        </div>
    </main>
  );
}