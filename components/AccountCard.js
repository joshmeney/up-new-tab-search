import PropTypes from 'prop-types';
import Emoji from 'react-emoji-render';

import { formatMoney, goalProgressPercentage } from 'utils/helpers';
import { accountDetails } from 'utils/accountDetails';

const AccountCard = ({ account }) => (
  <li className="px-4 pt-3 pb-4 overflow-hidden text-base text-gray-200 bg-gray-700 rounded-md shadow">
    <div className="flex items-center justify-between">
      <div className="flex items-center min-w-0 pr-4">
        <span className="mr-2 -mt-px text-lg">
          <Emoji text={`:${accountDetails[account.attributes.displayName]?.emoji}:`} />
        </span>
        <p className="flex-1 font-medium truncate">{account.attributes.displayName}</p>
      </div>
      <div className="flex-shrink-0 text-right">
        <p className="font-medium leading-6">{formatMoney(account.attributes.balance.valueInBaseUnits)}</p>
        <p className="text-xs leading-3 text-gray-400">
          of {formatMoney(accountDetails[account.attributes.displayName]?.goal)}
        </p>
      </div>
    </div>
    <div className="relative w-full h-1 mt-3 overflow-hidden bg-gray-800 rounded-full">
      <div
        style={{
          width: `${goalProgressPercentage(
            account.attributes.balance.valueInBaseUnits,
            accountDetails[account.attributes.displayName]?.goal
          )}%`,
        }}
        className="h-full bg-orange-up"
      />
    </div>
  </li>
);

AccountCard.propTypes = {
  account: PropTypes.shape({
    attributes: PropTypes.shape({
      balance: PropTypes.shape({
        value: PropTypes.string,
        valueInBaseUnits: PropTypes.number,
      }),
      displayName: PropTypes.string,
    }),
  }),
};

export default AccountCard;
