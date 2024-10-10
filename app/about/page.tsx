import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our Teacher</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3">
          <Image
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&h=500&q=80"
            alt="Yoga Teacher"
            width={500}
            height={500}
            className="rounded-full"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Sarah Johnson</h2>
          <p className="text-gray-700 mb-4">
            Sarah Johnson is a certified yoga instructor with over 10 years of experience in teaching various styles of yoga, including Hatha, Vinyasa, and Restorative yoga. She discovered her passion for yoga during a challenging period in her life and has since dedicated herself to sharing the transformative power of yoga with others.
          </p>
          <p className="text-gray-700 mb-4">
            Sarah completed her 200-hour Yoga Teacher Training in Rishikesh, India, and has continued her education with workshops and retreats around the world. Her teaching style emphasizes proper alignment, mindful breathing, and cultivating a deep mind-body connection.
          </p>
          <p className="text-gray-700 mb-4">
            When not on the mat, Sarah enjoys hiking, meditation, and exploring new vegetarian recipes. She believes that yoga is for everyone and strives to create an inclusive and welcoming environment in all her classes.
          </p>
          <h3 className="text-xl font-semibold mb-2">Certifications:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>200-hour Yoga Teacher Training (Yoga Alliance Certified)</li>
            <li>100-hour Yin Yoga Certification</li>
            <li>50-hour Meditation and Mindfulness Training</li>
            <li>Prenatal Yoga Certification</li>
          </ul>
        </div>
      </div>
    </div>
  );
}