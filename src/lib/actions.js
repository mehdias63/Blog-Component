'use server'

import { createCommentApi } from '@/services/commentService'
import { cookies } from 'next/headers'
import setCookieOnReq from '@/utils/setCookieOnReq'

export async function createComment(postId, parentId, formData) {
	const cookieStore = await cookies()
	const options = setCookieOnReq(cookiesStore)
	const rawFormData = {
		postId,
		parentId,
		text: formData.get('text'),
	}
	try {
		const { message } = await createCommentApi(rawFormData, options)
		return {
			message,
		}
	} catch (err) {
		const error = err?.response?.data?.message
		return {
			error,
		}
	}
}
