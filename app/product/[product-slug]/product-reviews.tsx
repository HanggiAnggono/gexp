import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { UserRating } from "@/components/ui/user-rating"
import { getReviewsByProductId } from "@/modules/review/service"

export async function ProductReviews({productId}: { productId: number }) {
  const reviews = await getReviewsByProductId(productId)

  return (
    <div>
      <h2 className="text-2xl mb-4">Reviews</h2>
      <div className="mb-6 flex items-center">
        <UserRating rating={4} size={32} />
        <div className="ml-2 text-gray-500 text-2xl">4.0</div>
      </div>

      {reviews.map((review) => (
        <div key={review.id} className="flex mb-4 gap-4">
          <Avatar>
            <AvatarImage src={review.user.imageUrl} />
            <AvatarFallback>{review.user.name}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg">{review.user.name}</h3>
            <UserRating rating={review.rating} className="mb-2" />
            <p>{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  )
}