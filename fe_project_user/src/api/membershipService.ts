import api from '../utils/axiosConfig'

export interface MembershipHistoryItem {
  requestId: string
  roomInstanceId: string
  startDate: string
  expireAt: string | null
  packageType: string
  requestedPackageName: string | null
  status: string
}

export const membershipService = {
  // Lấy lịch sử membership
  getMembershipHistory: async (): Promise<MembershipHistoryItem[]> => {
    const response = await api.get('/api/user/memberships/history')
    const data = response.data || response
    
    // Chỉ lấy các field cần thiết và filter theo status "Completed"
    return data
      .filter((item: any) => item.status === "Completed")
      .map((item: any) => ({
        requestId: item.requestId,
        roomInstanceId: item.roomInstanceId,
        startDate: item.startDate,
        expireAt: item.expireAt,
        packageType: item.packageType,
        requestedPackageName: item.requestedPackageName ?? null,
        status: item.status
      }))
  }
}
