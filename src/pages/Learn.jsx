import { learnData } from '../data/mockData';
import coverOne from '../assets/crypto/images/0_4mVyVaU6yLa--GR_.avif';
import coverTwo from '../assets/crypto/images/Replace_Bank.avif';
import coverThree from '../assets/crypto/images/Learn_Illustration_Ultimate_Guide_Bitcoin.avif';

const covers = [coverOne, coverTwo, coverThree];

const Learn = () => {
  return (
    <div className="cb-reveal mx-auto max-w-[1180px] px-6 py-12" style={{ '--reveal-delay': '40ms' }}>
      <h1 className="text-4xl font-bold tracking-tight text-[#0a0b0d]">Crypto basics and market insights</h1>
      <p className="mt-4 max-w-3xl text-lg text-[#58667e]">
        Beginner guides, practical explainers, and deep dives to help you build confidence in crypto.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {learnData.map((item, index) => (
          <article
            key={item.id}
            className="group cb-hover-rise overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow hover:shadow-xl"
          >
            <img
              src={covers[index]}
              alt={item.title}
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{item.category}</p>
              <h2 className="mt-3 text-xl font-bold text-[#0a0b0d]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#58667e]">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-3xl border border-gray-200 bg-[#0a0b0d] px-8 py-12 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Learning path</p>
        <h2 className="mt-4 text-3xl font-bold">Start with the essentials in 15 minutes</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs font-bold text-blue-300">Step 1</p>
            <p className="mt-2 font-semibold">What is blockchain?</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs font-bold text-blue-300">Step 2</p>
            <p className="mt-2 font-semibold">How wallets and keys work</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <p className="text-xs font-bold text-blue-300">Step 3</p>
            <p className="mt-2 font-semibold">Safe buying and risk management</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Learn;
