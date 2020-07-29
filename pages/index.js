import Head from 'next/head';
import useSWR from 'swr';

import SearchForm from 'components/SearchForm';
import AccountCard from 'components/AccountCard';
import { compareDisplayName, filterByAccountType } from '../utils/helpers';

export default function Home() {
  const jsonFetcher = (url, options) => fetch(url, options).then(r => r.json());

  const { data: accounts } = useSWR('/api/accounts', jsonFetcher);

  const accountsSortedByDisplayName = accounts?.data.sort(compareDisplayName);

  const filteredSavers = filterByAccountType(accountsSortedByDisplayName, 'SAVER');
  const filteredTransactionals = filterByAccountType(accountsSortedByDisplayName, 'TRANSACTIONAL');

  return (
    <div>
      <Head>
        <title>New tab</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="fixed inset-0 overflow-y-scroll md:overflow-hidden">
        <div className="flex flex-wrap h-screen">
          <main
            style={{ background: 'linear-gradient(to bottom right, #252f3f, #161e2e)' }}
            className="inset-0 flex items-center justify-center w-full py-20 md:w-2/3 lg:w-3/4"
          >
            <img
              src="https://source.unsplash.com/random/1280x720"
              style={{ opacity: 0.1 }}
              className="absolute inset-0 z-0 w-full"
              alt="Random background"
            />
            <div className="z-10 flex flex-col items-center justify-center">
              <img className="w-24 mb-4 md:mb-8 md:w-40 md:-mt-48" src="/logo.png" alt="Up Bank logo" />
              <SearchForm />
            </div>
          </main>

          <aside className="relative z-10 flex flex-col w-full h-full pt-6 pb-12 bg-gray-800 shadow-lg md:w-1/3 lg:w-1/4 md:overflow-y-scroll">
            <div
              style={{ background: 'linear-gradient(to top, #252f3f, rgba(37,47,63,0)' }}
              className="fixed bottom-0 z-10 w-full h-12 bg-red-500"
            />
            <header className="relative block px-4 sm:px-6">
              <h2 className="text-lg font-medium leading-7 text-gray-100">My Accounts</h2>
            </header>
            <div className="relative flex-1 block px-4 mt-6 sm:px-6">
              <div>
                <h2 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Transaction Accounts</h2>
                <ul className="mt-3">
                  {filteredTransactionals?.map(account => <AccountCard key={account.id} account={account} />)}
                </ul>
              </div>
              <div className="mt-8">
                <h2 className="text-xs font-medium tracking-widest text-gray-400 uppercase">Savings Accounts</h2>
                <ul className="grid grid-cols-2 gap-3 mt-3 md:grid-cols-1">
                  {filteredSavers?.map(account => <AccountCard key={account.id} account={account} />)}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
