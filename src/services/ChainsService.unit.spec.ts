import ChainsService from './ChainsService'
import { AddEthereumChainParameter, Chain, ChainKey, CoinKey } from '../types'
import ApiService from './ApiService'
import { ValidationError } from '../utils/errors'

jest.mock('./ApiService')
const mockedApiService = ApiService as jest.Mocked<typeof ApiService>

let chainsService: ChainsService

const chain1: Chain = {
  key: ChainKey.ETH,
  name: 'Ethereum',
  coin: CoinKey.ETH,
  id: 1,
  mainnet: true,
  metamask: {} as AddEthereumChainParameter,
}

const chain2: Chain = {
  key: ChainKey.POL,
  name: 'Polygon',
  coin: CoinKey.MATIC,
  id: 137,
  mainnet: true,
  metamask: {} as AddEthereumChainParameter,
}

describe('ChainsService', () => {
  beforeAll(() => {
    mockedApiService.getChains.mockResolvedValue([chain1, chain2])
    chainsService = ChainsService.getInstance()
  })

  describe('getChains', () => {
    it('should load and return the chains', async () => {
      const result = await chainsService.getChains()
      expect(result).toEqual([chain1, chain2])
    })
  })

  describe('getChainById', () => {
    it('should throw an error if the chain is unknown', async () => {
      await expect(chainsService.getChainById(1337)).rejects.toThrowError(
        new ValidationError(`Unknown chainId passed: ${1337}`)
      )
    })

    it('should return the chain if found', async () => {
      const result = await chainsService.getChainById(chain1.id)
      expect(result).toEqual(chain1)
    })
  })
})