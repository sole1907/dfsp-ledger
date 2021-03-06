var create = require('ut-error').define
var defaultErrorCode = 400
module.exports = [
  // ledger
  {
    type: 'ledger',
    message: 'dfsp-ledger error'
  },
  // ledger.account
  {
    type: 'ledger.transfer',
    message: 'dfsp-ledger transfer error'
  },
  // ledger.account.hold
  {
    type: 'ledger.transfer.hold',
    message: 'dfsp-ledger transfer-hold error'
  },
  {
    id: 'InsufficientFundsError',
    type: 'ledger.transfer.hold.insufficientFunds',
    message: 'Sender has insufficient funds',
    statusCode: 422
  },
  {
    id: 'UnprocessableEntityError',
    type: 'ledger.transfer.hold.unknownTransferType',
    message: 'Unknown transfer type'
  },
  {
    id: 'UnprocessableEntityError',
    type: 'ledger.transfer.hold.unprocessableEntity',
    message: 'Account `unknown` does not exist',
    statusCode: 422
  },
  {
    id: 'AlreadyExistsError',
    type: 'ledger.transfer.hold.alreadyExists',
    message: 'Can\'t modify transfer after execution.',
    statusCode: 422
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.transfer.hold.invalidUriParameter',
    message: 'PaymentId format is not valid'
  },
  {
    id: 'InvalidBodyError',
    type: 'ledger.transfer.hold.invalidBody',
    message: 'Body did not match schema'
  },
  {
    id: 'TransferExpired',
    type: 'ledger.transfer.hold.expired',
    message: 'Transfer expired'
  },
  // ledger.transfer.execute
  {
    type: 'ledger.transfer.execute',
    massage: 'ledger transfer.execute error'
  },
  {
    id: 'UnmetConditionError',
    type: 'ledger.transfer.execute.unmetCondition',
    message: 'Fulfillment does not match condition',
    statusCode: 422
  },
  {
    id: 'UnprocessableEntityError',
    type: 'ledger.transfer.execute.unprocessableEntity',
    message: 'Debits and credits are not equal',
    statusCode: 422
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.transfer.execute.invalidUriParameter',
    message: 'PaymentId format is not valid'
  },
  {
    id: 'InvalidBodyError',
    type: 'ledger.transfer.execute.invalidBody',
    message: 'Body did not match schema'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.execute.notFound',
    message: 'Unknown transfer.',
    statusCode: 404
  },
  {
    id: 'AlreadyExistsError',
    type: 'ledger.transfer.execute.alreadyExists',
    message: 'Can\'t modify transfer after execution.',
    statusCode: 422
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.execute.memoNotFound',
    message: 'Memo object was not found',
    statusCode: 404
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.execute.agentCommissionAccountNotFound',
    message: 'Agent commission account could not be found',
    statusCode: 404
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.execute.transferCodeNotFound',
    message: 'Transfer code not specified or unknown',
    statusCode: 404
  },
  // ledger.transfer.reject
  {
    type: 'ledger.transfer.reject',
    massage: 'ledger transfer.reject error'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.reject.notFound',
    message: 'Unknown transfer.',
    statusCode: 404
  },
  {
    id: 'AlreadyExistsError',
    type: 'ledger.transfer.reject.alreadyExists',
    message: 'Can\'t modify transfer after rejection.',
    statusCode: 422
  },
  // ledger.transfer.get
  {
    type: 'ledger.transfer.get',
    message: 'ledger transfer.get error'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.get.notFound',
    message: 'Unknown transfer',
    statusCode: 404
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.transfer.get.invalidUriParameter',
    message: 'PaymentId format is not valid'
  },
  // ledger.transfer.getFulfillment
  {
    type: 'ledger.transfer.getFulfillment',
    message: 'ledger transfer.getFulfillment error'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.transfer.getFulfillment.notFound',
    message: 'Unknown transfer',
    statusCode: 404
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.transfer.getFulfillment.invalidUriParameter',
    message: 'PaymentId format is not valid'
  },
  // ledger.account
  {
    type: 'ledger.account',
    message: 'ledger account error'
  },
  // ledger.account.edit
  {
    type: 'ledger.account.add',
    message: 'ledger account.add error'
  },
  {
    id: 'LedgerAccountExistsError',
    type: 'ledger.account.add.exists',
    message: 'Account name already in use',
    statusCode: 422
  },
  {
    id: 'UnauthorizedError',
    type: 'ledger.account.add.unauthorized',
    message: 'You do not have permissions to access this resource',
    statusCode: 403
  },
  {
    id: 'NotFoundError',
    type: 'ledger.account.add.notFound',
    message: 'Unknown account.',
    statusCode: 404
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.account.add.invalidUriParameter',
    message: 'One of the provided URI parameters was invalid'
  },
  {
    id: 'InvalidBodyError',
    type: 'ledger.account.add.invalidBody',
    message: 'The submitted JSON entity does not match the required schema'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.account.add.parentAccountNotFound',
    message: 'Parent account was not found.',
    statusCode: 404
  },
  // ledger.account.get
  {
    type: 'ledger.account.get',
    message: 'dfsp-ledger account.get error'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.account.get.notFound',
    message: 'Unknown account.',
    statusCode: 404
  },
  {
    id: 'InvalidUriParameterError',
    type: 'ledger.account.get.invalidUriParameter',
    message: 'One of the provided URI parameters was invalid'
  },
  {
    id: 'NotFoundError',
    type: 'ledger.account.edit.notFound',
    message: 'Unknown account.',
    statusCode: 404
  },
  {
    id: 'QuotePaymentIdMissing',
    type: 'ledger.quotePaymentIdMissing',
    message: 'Quote PaymentId is missing'
  },
  {
    id: 'QuoteIsDebitMissing',
    type: 'ledger.quoteIsDebitMissing',
    message: 'Quote isDebit param is missing'
  },
  {
    id: 'QuoteNotFound',
    type: 'ledger.quoteNotFound',
    message: 'Quote with the given params was not found'
  }
].reduce((exporting, error) => {
  var typePath = error.type.split('.')
  var Ctor = create(typePath.pop(), typePath.join('.'), error.message)
  /**
   * Exceptions thrown from the db procedures will not execute this function
   * It will only be executed if an error is throw from JS
   */
  exporting[error.type] = function (params) {
    return new Ctor({
      isJsError: true,
      params: params,
      statusCode: error.statusCode || defaultErrorCode,
      id: error.id || error.type
    })
  }
  return exporting
}, {})
