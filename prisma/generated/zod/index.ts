import type { Prisma } from "@prisma/client";
import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum([
<<<<<<< HEAD
  "user_id",
  "username",
  "email",
  "password_hash",
  "profile_picture",
  "bio",
  "full_name",
]);

export const PostScalarFieldEnumSchema = z.enum([
  "post_id",
  "user_id",
  "created_at",
]);

export const CommentScalarFieldEnumSchema = z.enum([
  "comment_id",
  "user_id",
  "post_id",
  "created_at",
  "content",
]);

export const LikeScalarFieldEnumSchema = z.enum([
  "likes_id",
  "user_id",
  "post_id",
  "created_at",
]);

export const MediaScalarFieldEnumSchema = z.enum([
  "media_id",
  "post_id",
  "media_url",
  "media_type",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);
/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  user_id: z.string(),
  username: z.string(),
  email: z.string(),
  password_hash: z.string(),
  profile_picture: z.string().nullable(),
  bio: z.string().nullable(),
  full_name: z.string(),
=======
  userId: z.string(),
  username: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  profilePicture: z.string().nullable(),
  bio: z.string().nullable(),
  fullName: z.string(),
>>>>>>> 932cb246e9477e7956d66db8f462f1974a0c35f7
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// POST SCHEMA
/////////////////////////////////////////

export const PostSchema = z.object({
  post_id: z.string(),
  user_id: z.string(),
  created_at: z.coerce.date(),
});

export type Post = z.infer<typeof PostSchema>;

/////////////////////////////////////////
// COMMENT SCHEMA
/////////////////////////////////////////

export const CommentSchema = z.object({
  comment_id: z.string(),
  user_id: z.string(),
  post_id: z.string(),
  created_at: z.coerce.date(),
  content: z.string(),
});

export type Comment = z.infer<typeof CommentSchema>;

/////////////////////////////////////////
// LIKE SCHEMA
/////////////////////////////////////////

export const LikeSchema = z.object({
  likes_id: z.string(),
  user_id: z.string(),
  post_id: z.string(),
  created_at: z.coerce.date(),
});

export type Like = z.infer<typeof LikeSchema>;

/////////////////////////////////////////
// MEDIA SCHEMA
/////////////////////////////////////////

export const MediaSchema = z.object({
  media_id: z.string(),
  post_id: z.string(),
  media_url: z.string(),
  media_type: z.string(),
});

export type Media = z.infer<typeof MediaSchema>;

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z
  .object({
    posts: z
      .union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)])
      .optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManyArgsSchema)])
      .optional(),
    likes: z
      .union([z.boolean(), z.lazy(() => LikeFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z
  .object({
    select: z.lazy(() => UserSelectSchema).optional(),
    include: z.lazy(() => UserIncludeSchema).optional(),
  })
  .strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  z
    .object({
      posts: z.boolean().optional(),
      comments: z.boolean().optional(),
      likes: z.boolean().optional(),
    })
    .strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z
  .object({
    user_id: z.boolean().optional(),
    username: z.boolean().optional(),
    email: z.boolean().optional(),
    password_hash: z.boolean().optional(),
    profile_picture: z.boolean().optional(),
    bio: z.boolean().optional(),
    full_name: z.boolean().optional(),
    posts: z
      .union([z.boolean(), z.lazy(() => PostFindManyArgsSchema)])
      .optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManyArgsSchema)])
      .optional(),
    likes: z
      .union([z.boolean(), z.lazy(() => LikeFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// POST
//------------------------------------------------------

export const PostIncludeSchema: z.ZodType<Prisma.PostInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManyArgsSchema)])
      .optional(),
    likes: z
      .union([z.boolean(), z.lazy(() => LikeFindManyArgsSchema)])
      .optional(),
    media: z
      .union([z.boolean(), z.lazy(() => MediaFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

export const PostArgsSchema: z.ZodType<Prisma.PostDefaultArgs> = z
  .object({
    select: z.lazy(() => PostSelectSchema).optional(),
    include: z.lazy(() => PostIncludeSchema).optional(),
  })
  .strict();

export const PostCountOutputTypeArgsSchema: z.ZodType<Prisma.PostCountOutputTypeDefaultArgs> =
  z
    .object({
      select: z.lazy(() => PostCountOutputTypeSelectSchema).nullish(),
    })
    .strict();

export const PostCountOutputTypeSelectSchema: z.ZodType<Prisma.PostCountOutputTypeSelect> =
  z
    .object({
      comments: z.boolean().optional(),
      likes: z.boolean().optional(),
      media: z.boolean().optional(),
    })
    .strict();

export const PostSelectSchema: z.ZodType<Prisma.PostSelect> = z
  .object({
    post_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    comments: z
      .union([z.boolean(), z.lazy(() => CommentFindManyArgsSchema)])
      .optional(),
    likes: z
      .union([z.boolean(), z.lazy(() => LikeFindManyArgsSchema)])
      .optional(),
    media: z
      .union([z.boolean(), z.lazy(() => MediaFindManyArgsSchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => PostCountOutputTypeArgsSchema)])
      .optional(),
  })
  .strict();

// COMMENT
//------------------------------------------------------

export const CommentIncludeSchema: z.ZodType<Prisma.CommentInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

export const CommentArgsSchema: z.ZodType<Prisma.CommentDefaultArgs> = z
  .object({
    select: z.lazy(() => CommentSelectSchema).optional(),
    include: z.lazy(() => CommentIncludeSchema).optional(),
  })
  .strict();

export const CommentSelectSchema: z.ZodType<Prisma.CommentSelect> = z
  .object({
    comment_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    post_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    content: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

// LIKE
//------------------------------------------------------

export const LikeIncludeSchema: z.ZodType<Prisma.LikeInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

export const LikeArgsSchema: z.ZodType<Prisma.LikeDefaultArgs> = z
  .object({
    select: z.lazy(() => LikeSelectSchema).optional(),
    include: z.lazy(() => LikeIncludeSchema).optional(),
  })
  .strict();

export const LikeSelectSchema: z.ZodType<Prisma.LikeSelect> = z
  .object({
    likes_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    post_id: z.boolean().optional(),
    created_at: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsSchema)]).optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

// MEDIA
//------------------------------------------------------

export const MediaIncludeSchema: z.ZodType<Prisma.MediaInclude> = z
  .object({
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

export const MediaArgsSchema: z.ZodType<Prisma.MediaDefaultArgs> = z
  .object({
    select: z.lazy(() => MediaSelectSchema).optional(),
    include: z.lazy(() => MediaIncludeSchema).optional(),
  })
  .strict();

export const MediaSelectSchema: z.ZodType<Prisma.MediaSelect> = z
  .object({
    media_id: z.boolean().optional(),
    post_id: z.boolean().optional(),
    media_url: z.boolean().optional(),
    media_type: z.boolean().optional(),
    post: z.union([z.boolean(), z.lazy(() => PostArgsSchema)]).optional(),
  })
  .strict();

/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserWhereInputSchema),
        z.lazy(() => UserWhereInputSchema).array(),
      ])
      .optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    username: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    email: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    password_hash: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    profile_picture: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    bio: z
      .union([z.lazy(() => StringNullableFilterSchema), z.string()])
      .optional()
      .nullable(),
    full_name: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    posts: z.lazy(() => PostListRelationFilterSchema).optional(),
    comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
    likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
  })
  .strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> =
  z
    .object({
      user_id: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password_hash: z.lazy(() => SortOrderSchema).optional(),
      profile_picture: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      bio: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      full_name: z.lazy(() => SortOrderSchema).optional(),
      posts: z.lazy(() => PostOrderByRelationAggregateInputSchema).optional(),
      comments: z
        .lazy(() => CommentOrderByRelationAggregateInputSchema)
        .optional(),
      likes: z.lazy(() => LikeOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> =
  z
    .union([
      z.object({
        user_id: z.string(),
        username: z.string(),
        email: z.string(),
      }),
      z.object({
        user_id: z.string(),
        username: z.string(),
      }),
      z.object({
        user_id: z.string(),
        email: z.string(),
      }),
      z.object({
        user_id: z.string(),
      }),
      z.object({
        username: z.string(),
        email: z.string(),
      }),
      z.object({
        username: z.string(),
      }),
      z.object({
        email: z.string(),
      }),
    ])
    .and(
      z
        .object({
          user_id: z.string().optional(),
          username: z.string().optional(),
          email: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => UserWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => UserWhereInputSchema),
              z.lazy(() => UserWhereInputSchema).array(),
            ])
            .optional(),
          password_hash: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          profile_picture: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          bio: z
            .union([z.lazy(() => StringNullableFilterSchema), z.string()])
            .optional()
            .nullable(),
          full_name: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          posts: z.lazy(() => PostListRelationFilterSchema).optional(),
          comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
          likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> =
  z
    .object({
      user_id: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password_hash: z.lazy(() => SortOrderSchema).optional(),
      profile_picture: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      bio: z
        .union([
          z.lazy(() => SortOrderSchema),
          z.lazy(() => SortOrderInputSchema),
        ])
        .optional(),
      full_name: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => UserScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema),
          z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      username: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      email: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      password_hash: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      profile_picture: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.lazy(() => StringNullableWithAggregatesFilterSchema),
          z.string(),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const PostWhereInputSchema: z.ZodType<Prisma.PostWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PostWhereInputSchema),
        z.lazy(() => PostWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PostWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PostWhereInputSchema),
        z.lazy(() => PostWhereInputSchema).array(),
      ])
      .optional(),
    post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
    likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
    media: z.lazy(() => MediaListRelationFilterSchema).optional(),
  })
  .strict();

export const PostOrderByWithRelationInputSchema: z.ZodType<Prisma.PostOrderByWithRelationInput> =
  z
    .object({
      post_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      comments: z
        .lazy(() => CommentOrderByRelationAggregateInputSchema)
        .optional(),
      likes: z.lazy(() => LikeOrderByRelationAggregateInputSchema).optional(),
      media: z.lazy(() => MediaOrderByRelationAggregateInputSchema).optional(),
    })
    .strict();

export const PostWhereUniqueInputSchema: z.ZodType<Prisma.PostWhereUniqueInput> =
  z
    .object({
      post_id: z.string(),
    })
    .and(
      z
        .object({
          post_id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => PostWhereInputSchema),
              z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => PostWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => PostWhereInputSchema),
              z.lazy(() => PostWhereInputSchema).array(),
            ])
            .optional(),
          user_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          created_at: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          comments: z.lazy(() => CommentListRelationFilterSchema).optional(),
          likes: z.lazy(() => LikeListRelationFilterSchema).optional(),
          media: z.lazy(() => MediaListRelationFilterSchema).optional(),
        })
        .strict(),
    );

export const PostOrderByWithAggregationInputSchema: z.ZodType<Prisma.PostOrderByWithAggregationInput> =
  z
    .object({
      post_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => PostCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => PostMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => PostMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const PostScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PostScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PostScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema),
          z.lazy(() => PostScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      post_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const CommentWhereInputSchema: z.ZodType<Prisma.CommentWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CommentWhereInputSchema),
        z.lazy(() => CommentWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CommentWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CommentWhereInputSchema),
        z.lazy(() => CommentWhereInputSchema).array(),
      ])
      .optional(),
    comment_id: z
      .union([z.lazy(() => UuidFilterSchema), z.string()])
      .optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    content: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    post: z
      .union([
        z.lazy(() => PostRelationFilterSchema),
        z.lazy(() => PostWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const CommentOrderByWithRelationInputSchema: z.ZodType<Prisma.CommentOrderByWithRelationInput> =
  z
    .object({
      comment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const CommentWhereUniqueInputSchema: z.ZodType<Prisma.CommentWhereUniqueInput> =
  z
    .object({
      comment_id: z.string(),
    })
    .and(
      z
        .object({
          comment_id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => CommentWhereInputSchema),
              z.lazy(() => CommentWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => CommentWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => CommentWhereInputSchema),
              z.lazy(() => CommentWhereInputSchema).array(),
            ])
            .optional(),
          user_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          post_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          created_at: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          content: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          post: z
            .union([
              z.lazy(() => PostRelationFilterSchema),
              z.lazy(() => PostWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const CommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.CommentOrderByWithAggregationInput> =
  z
    .object({
      comment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => CommentCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => CommentMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => CommentMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const CommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CommentScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CommentScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CommentScalarWhereWithAggregatesInputSchema),
          z.lazy(() => CommentScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      comment_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      post_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
      content: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const LikeWhereInputSchema: z.ZodType<Prisma.LikeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => LikeWhereInputSchema),
        z.lazy(() => LikeWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => LikeWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => LikeWhereInputSchema),
        z.lazy(() => LikeWhereInputSchema).array(),
      ])
      .optional(),
    likes_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    created_at: z
      .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterSchema),
        z.lazy(() => UserWhereInputSchema),
      ])
      .optional(),
    post: z
      .union([
        z.lazy(() => PostRelationFilterSchema),
        z.lazy(() => PostWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const LikeOrderByWithRelationInputSchema: z.ZodType<Prisma.LikeOrderByWithRelationInput> =
  z
    .object({
      likes_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
      post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const LikeWhereUniqueInputSchema: z.ZodType<Prisma.LikeWhereUniqueInput> =
  z
    .object({
      likes_id: z.string(),
    })
    .and(
      z
        .object({
          likes_id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => LikeWhereInputSchema),
              z.lazy(() => LikeWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => LikeWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => LikeWhereInputSchema),
              z.lazy(() => LikeWhereInputSchema).array(),
            ])
            .optional(),
          user_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          post_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          created_at: z
            .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
            .optional(),
          user: z
            .union([
              z.lazy(() => UserRelationFilterSchema),
              z.lazy(() => UserWhereInputSchema),
            ])
            .optional(),
          post: z
            .union([
              z.lazy(() => PostRelationFilterSchema),
              z.lazy(() => PostWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const LikeOrderByWithAggregationInputSchema: z.ZodType<Prisma.LikeOrderByWithAggregationInput> =
  z
    .object({
      likes_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => LikeCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => LikeMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => LikeMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const LikeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.LikeScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LikeScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema),
          z.lazy(() => LikeScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      likes_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      user_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      post_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      created_at: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const MediaWhereInputSchema: z.ZodType<Prisma.MediaWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MediaWhereInputSchema),
        z.lazy(() => MediaWhereInputSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MediaWhereInputSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MediaWhereInputSchema),
        z.lazy(() => MediaWhereInputSchema).array(),
      ])
      .optional(),
    media_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
    media_url: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    media_type: z
      .union([z.lazy(() => StringFilterSchema), z.string()])
      .optional(),
    post: z
      .union([
        z.lazy(() => PostRelationFilterSchema),
        z.lazy(() => PostWhereInputSchema),
      ])
      .optional(),
  })
  .strict();

export const MediaOrderByWithRelationInputSchema: z.ZodType<Prisma.MediaOrderByWithRelationInput> =
  z
    .object({
      media_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      media_url: z.lazy(() => SortOrderSchema).optional(),
      media_type: z.lazy(() => SortOrderSchema).optional(),
      post: z.lazy(() => PostOrderByWithRelationInputSchema).optional(),
    })
    .strict();

export const MediaWhereUniqueInputSchema: z.ZodType<Prisma.MediaWhereUniqueInput> =
  z
    .object({
      media_id: z.string(),
    })
    .and(
      z
        .object({
          media_id: z.string().optional(),
          AND: z
            .union([
              z.lazy(() => MediaWhereInputSchema),
              z.lazy(() => MediaWhereInputSchema).array(),
            ])
            .optional(),
          OR: z
            .lazy(() => MediaWhereInputSchema)
            .array()
            .optional(),
          NOT: z
            .union([
              z.lazy(() => MediaWhereInputSchema),
              z.lazy(() => MediaWhereInputSchema).array(),
            ])
            .optional(),
          post_id: z
            .union([z.lazy(() => UuidFilterSchema), z.string()])
            .optional(),
          media_url: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          media_type: z
            .union([z.lazy(() => StringFilterSchema), z.string()])
            .optional(),
          post: z
            .union([
              z.lazy(() => PostRelationFilterSchema),
              z.lazy(() => PostWhereInputSchema),
            ])
            .optional(),
        })
        .strict(),
    );

export const MediaOrderByWithAggregationInputSchema: z.ZodType<Prisma.MediaOrderByWithAggregationInput> =
  z
    .object({
      media_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      media_url: z.lazy(() => SortOrderSchema).optional(),
      media_type: z.lazy(() => SortOrderSchema).optional(),
      _count: z.lazy(() => MediaCountOrderByAggregateInputSchema).optional(),
      _max: z.lazy(() => MediaMaxOrderByAggregateInputSchema).optional(),
      _min: z.lazy(() => MediaMinOrderByAggregateInputSchema).optional(),
    })
    .strict();

export const MediaScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.MediaScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => MediaScalarWhereWithAggregatesInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => MediaScalarWhereWithAggregatesInputSchema),
          z.lazy(() => MediaScalarWhereWithAggregatesInputSchema).array(),
        ])
        .optional(),
      media_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      post_id: z
        .union([z.lazy(() => UuidWithAggregatesFilterSchema), z.string()])
        .optional(),
      media_url: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
      media_type: z
        .union([z.lazy(() => StringWithAggregatesFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
  .object({
    user_id: z.string().optional(),
    username: z.string(),
    email: z.string(),
    password_hash: z.string(),
    profile_picture: z.string().optional().nullable(),
    bio: z.string().optional().nullable(),
    full_name: z.string(),
    posts: z.lazy(() => PostCreateNestedManyWithoutUserInputSchema).optional(),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutUserInputSchema)
      .optional(),
    likes: z.lazy(() => LikeCreateNestedManyWithoutUserInputSchema).optional(),
  })
  .strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z
  .object({
    user_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    username: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    email: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    password_hash: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    profile_picture: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    bio: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
      ])
      .optional()
      .nullable(),
    full_name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    posts: z.lazy(() => PostUpdateManyWithoutUserNestedInputSchema).optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutUserNestedInputSchema)
      .optional(),
    likes: z.lazy(() => LikeUpdateManyWithoutUserNestedInputSchema).optional(),
  })
  .strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
    })
    .strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostCreateInputSchema: z.ZodType<Prisma.PostCreateInput> = z
  .object({
    post_id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
    comments: z
      .lazy(() => CommentCreateNestedManyWithoutPostInputSchema)
      .optional(),
    likes: z.lazy(() => LikeCreateNestedManyWithoutPostInputSchema).optional(),
    media: z.lazy(() => MediaCreateNestedManyWithoutPostInputSchema).optional(),
  })
  .strict();

export const PostUncheckedCreateInputSchema: z.ZodType<Prisma.PostUncheckedCreateInput> =
  z
    .object({
      post_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUpdateInputSchema: z.ZodType<Prisma.PostUpdateInput> = z
  .object({
    post_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
      .optional(),
    comments: z
      .lazy(() => CommentUpdateManyWithoutPostNestedInputSchema)
      .optional(),
    likes: z.lazy(() => LikeUpdateManyWithoutPostNestedInputSchema).optional(),
    media: z.lazy(() => MediaUpdateManyWithoutPostNestedInputSchema).optional(),
  })
  .strict();

export const PostUncheckedUpdateInputSchema: z.ZodType<Prisma.PostUncheckedUpdateInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateManyInputSchema: z.ZodType<Prisma.PostCreateManyInput> =
  z
    .object({
      post_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const PostUpdateManyMutationInputSchema: z.ZodType<Prisma.PostUpdateManyMutationInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentCreateInputSchema: z.ZodType<Prisma.CommentCreateInput> = z
  .object({
    comment_id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    content: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema),
    post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputSchema),
  })
  .strict();

export const CommentUncheckedCreateInputSchema: z.ZodType<Prisma.CommentUncheckedCreateInput> =
  z
    .object({
      comment_id: z.string().optional(),
      user_id: z.string(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const CommentUpdateInputSchema: z.ZodType<Prisma.CommentUpdateInput> = z
  .object({
    comment_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    content: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema)
      .optional(),
    post: z
      .lazy(() => PostUpdateOneRequiredWithoutCommentsNestedInputSchema)
      .optional(),
  })
  .strict();

export const CommentUncheckedUpdateInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentCreateManyInputSchema: z.ZodType<Prisma.CommentCreateManyInput> =
  z
    .object({
      comment_id: z.string().optional(),
      user_id: z.string(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const CommentUpdateManyMutationInputSchema: z.ZodType<Prisma.CommentUpdateManyMutationInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateInputSchema: z.ZodType<Prisma.LikeCreateInput> = z
  .object({
    likes_id: z.string().optional(),
    created_at: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutLikesInputSchema),
    post: z.lazy(() => PostCreateNestedOneWithoutLikesInputSchema),
  })
  .strict();

export const LikeUncheckedCreateInputSchema: z.ZodType<Prisma.LikeUncheckedCreateInput> =
  z
    .object({
      likes_id: z.string().optional(),
      user_id: z.string(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const LikeUpdateInputSchema: z.ZodType<Prisma.LikeUpdateInput> = z
  .object({
    likes_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    created_at: z
      .union([
        z.coerce.date(),
        z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutLikesNestedInputSchema)
      .optional(),
    post: z
      .lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputSchema)
      .optional(),
  })
  .strict();

export const LikeUncheckedUpdateInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateManyInputSchema: z.ZodType<Prisma.LikeCreateManyInput> =
  z
    .object({
      likes_id: z.string().optional(),
      user_id: z.string(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const LikeUpdateManyMutationInputSchema: z.ZodType<Prisma.LikeUpdateManyMutationInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaCreateInputSchema: z.ZodType<Prisma.MediaCreateInput> = z
  .object({
    media_id: z.string().optional(),
    media_url: z.string(),
    media_type: z.string(),
    post: z.lazy(() => PostCreateNestedOneWithoutMediaInputSchema),
  })
  .strict();

export const MediaUncheckedCreateInputSchema: z.ZodType<Prisma.MediaUncheckedCreateInput> =
  z
    .object({
      media_id: z.string().optional(),
      post_id: z.string(),
      media_url: z.string(),
      media_type: z.string(),
    })
    .strict();

export const MediaUpdateInputSchema: z.ZodType<Prisma.MediaUpdateInput> = z
  .object({
    media_id: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    media_url: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    media_type: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)])
      .optional(),
    post: z
      .lazy(() => PostUpdateOneRequiredWithoutMediaNestedInputSchema)
      .optional(),
  })
  .strict();

export const MediaUncheckedUpdateInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaCreateManyInputSchema: z.ZodType<Prisma.MediaCreateManyInput> =
  z
    .object({
      media_id: z.string().optional(),
      post_id: z.string(),
      media_url: z.string(),
      media_type: z.string(),
    })
    .strict();

export const MediaUpdateManyMutationInputSchema: z.ZodType<Prisma.MediaUpdateManyMutationInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaUncheckedUpdateManyInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UuidFilterSchema: z.ZodType<Prisma.UuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
  })
  .strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    mode: z.lazy(() => QueryModeSchema).optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const PostListRelationFilterSchema: z.ZodType<Prisma.PostListRelationFilter> =
  z
    .object({
      every: z.lazy(() => PostWhereInputSchema).optional(),
      some: z.lazy(() => PostWhereInputSchema).optional(),
      none: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const CommentListRelationFilterSchema: z.ZodType<Prisma.CommentListRelationFilter> =
  z
    .object({
      every: z.lazy(() => CommentWhereInputSchema).optional(),
      some: z.lazy(() => CommentWhereInputSchema).optional(),
      none: z.lazy(() => CommentWhereInputSchema).optional(),
    })
    .strict();

export const LikeListRelationFilterSchema: z.ZodType<Prisma.LikeListRelationFilter> =
  z
    .object({
      every: z.lazy(() => LikeWhereInputSchema).optional(),
      some: z.lazy(() => LikeWhereInputSchema).optional(),
      none: z.lazy(() => LikeWhereInputSchema).optional(),
    })
    .strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z
  .object({
    sort: z.lazy(() => SortOrderSchema),
    nulls: z.lazy(() => NullsOrderSchema).optional(),
  })
  .strict();

export const PostOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PostOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CommentOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.LikeOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> =
  z
    .object({
      user_id: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password_hash: z.lazy(() => SortOrderSchema).optional(),
      profile_picture: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      full_name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> =
  z
    .object({
      user_id: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password_hash: z.lazy(() => SortOrderSchema).optional(),
      profile_picture: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      full_name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> =
  z
    .object({
      user_id: z.lazy(() => SortOrderSchema).optional(),
      username: z.lazy(() => SortOrderSchema).optional(),
      email: z.lazy(() => SortOrderSchema).optional(),
      password_hash: z.lazy(() => SortOrderSchema).optional(),
      profile_picture: z.lazy(() => SortOrderSchema).optional(),
      bio: z.lazy(() => SortOrderSchema).optional(),
      full_name: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const UuidWithAggregatesFilterSchema: z.ZodType<Prisma.UuidWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      mode: z.lazy(() => QueryModeSchema).optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z
  .object({
    equals: z.coerce.date().optional(),
    in: z.coerce.date().array().optional(),
    notIn: z.coerce.date().array().optional(),
    lt: z.coerce.date().optional(),
    lte: z.coerce.date().optional(),
    gt: z.coerce.date().optional(),
    gte: z.coerce.date().optional(),
    not: z
      .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
      .optional(),
  })
  .strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z
  .object({
    is: z.lazy(() => UserWhereInputSchema).optional(),
    isNot: z.lazy(() => UserWhereInputSchema).optional(),
  })
  .strict();

export const MediaListRelationFilterSchema: z.ZodType<Prisma.MediaListRelationFilter> =
  z
    .object({
      every: z.lazy(() => MediaWhereInputSchema).optional(),
      some: z.lazy(() => MediaWhereInputSchema).optional(),
      none: z.lazy(() => MediaWhereInputSchema).optional(),
    })
    .strict();

export const MediaOrderByRelationAggregateInputSchema: z.ZodType<Prisma.MediaOrderByRelationAggregateInput> =
  z
    .object({
      _count: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostCountOrderByAggregateInputSchema: z.ZodType<Prisma.PostCountOrderByAggregateInput> =
  z
    .object({
      post_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PostMaxOrderByAggregateInput> =
  z
    .object({
      post_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostMinOrderByAggregateInputSchema: z.ZodType<Prisma.PostMinOrderByAggregateInput> =
  z
    .object({
      post_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const PostRelationFilterSchema: z.ZodType<Prisma.PostRelationFilter> = z
  .object({
    is: z.lazy(() => PostWhereInputSchema).optional(),
    isNot: z.lazy(() => PostWhereInputSchema).optional(),
  })
  .strict();

export const CommentCountOrderByAggregateInputSchema: z.ZodType<Prisma.CommentCountOrderByAggregateInput> =
  z
    .object({
      comment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CommentMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMaxOrderByAggregateInput> =
  z
    .object({
      comment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const CommentMinOrderByAggregateInputSchema: z.ZodType<Prisma.CommentMinOrderByAggregateInput> =
  z
    .object({
      comment_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
      content: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeCountOrderByAggregateInputSchema: z.ZodType<Prisma.LikeCountOrderByAggregateInput> =
  z
    .object({
      likes_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.LikeMaxOrderByAggregateInput> =
  z
    .object({
      likes_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const LikeMinOrderByAggregateInputSchema: z.ZodType<Prisma.LikeMinOrderByAggregateInput> =
  z
    .object({
      likes_id: z.lazy(() => SortOrderSchema).optional(),
      user_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      created_at: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const MediaCountOrderByAggregateInputSchema: z.ZodType<Prisma.MediaCountOrderByAggregateInput> =
  z
    .object({
      media_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      media_url: z.lazy(() => SortOrderSchema).optional(),
      media_type: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const MediaMaxOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMaxOrderByAggregateInput> =
  z
    .object({
      media_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      media_url: z.lazy(() => SortOrderSchema).optional(),
      media_type: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const MediaMinOrderByAggregateInputSchema: z.ZodType<Prisma.MediaMinOrderByAggregateInput> =
  z
    .object({
      media_id: z.lazy(() => SortOrderSchema).optional(),
      post_id: z.lazy(() => SortOrderSchema).optional(),
      media_url: z.lazy(() => SortOrderSchema).optional(),
      media_type: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict();

export const PostCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PostCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutUserInputSchema),
          z.lazy(() => CommentCreateWithoutUserInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutUserInputSchema),
          z.lazy(() => CommentCreateWithoutUserInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional(),
    })
    .strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> =
  z
    .object({
      set: z.string().optional().nullable(),
    })
    .strict();

export const PostUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PostUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutUserInputSchema),
          z.lazy(() => CommentCreateWithoutUserInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.LikeUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutUserInputSchema),
          z.lazy(() => PostCreateWithoutUserInputSchema).array(),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => PostCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => PostCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PostWhereUniqueInputSchema),
          z.lazy(() => PostWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => PostUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => PostUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutUserInputSchema),
          z.lazy(() => CommentCreateWithoutUserInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => CommentUpsertWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema),
          z
            .lazy(() => CommentUpdateWithWhereUniqueWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutUserInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutUserNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutUserInputSchema),
          z.lazy(() => LikeCreateWithoutUserInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutUserInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyUserInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutUserInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutUserInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutPostsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const CommentCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.CommentCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPostInputSchema),
          z.lazy(() => CommentCreateWithoutPostInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MediaCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.MediaCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutPostInputSchema),
          z.lazy(() => MediaCreateWithoutPostInputSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.CommentUncheckedCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPostInputSchema),
          z.lazy(() => CommentCreateWithoutPostInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MediaUncheckedCreateNestedManyWithoutPostInputSchema: z.ZodType<Prisma.MediaUncheckedCreateNestedManyWithoutPostInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutPostInputSchema),
          z.lazy(() => MediaCreateWithoutPostInputSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyPostInputEnvelopeSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> =
  z
    .object({
      set: z.coerce.date().optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutPostsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutPostsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutPostsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutPostsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutPostsInputSchema),
          z.lazy(() => UserUpdateWithoutPostsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.CommentUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPostInputSchema),
          z.lazy(() => CommentCreateWithoutPostInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CommentUpsertWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => CommentUpsertWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CommentUpdateWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => CommentUpdateWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutPostInputSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.LikeUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MediaUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.MediaUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutPostInputSchema),
          z.lazy(() => MediaCreateWithoutPostInputSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MediaUpsertWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => MediaUpsertWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => MediaUpdateWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => MediaUpdateWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MediaUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => MediaUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MediaScalarWhereInputSchema),
          z.lazy(() => MediaScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => CommentCreateWithoutPostInputSchema),
          z.lazy(() => CommentCreateWithoutPostInputSchema).array(),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => CommentCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => CommentUpsertWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => CommentUpsertWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => CommentCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => CommentWhereUniqueInputSchema),
          z.lazy(() => CommentWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => CommentUpdateWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => CommentUpdateWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => CommentUpdateManyWithWhereWithoutPostInputSchema),
          z
            .lazy(() => CommentUpdateManyWithWhereWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => LikeCreateWithoutPostInputSchema),
          z.lazy(() => LikeCreateWithoutPostInputSchema).array(),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => LikeCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpsertWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => LikeCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => LikeWhereUniqueInputSchema),
          z.lazy(() => LikeWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema),
          z.lazy(() => LikeUpdateWithWhereUniqueWithoutPostInputSchema).array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => LikeUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MediaUncheckedUpdateManyWithoutPostNestedInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutPostNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MediaCreateWithoutPostInputSchema),
          z.lazy(() => MediaCreateWithoutPostInputSchema).array(),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
          z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema).array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema),
          z.lazy(() => MediaCreateOrConnectWithoutPostInputSchema).array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(() => MediaUpsertWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => MediaUpsertWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MediaCreateManyPostInputEnvelopeSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MediaWhereUniqueInputSchema),
          z.lazy(() => MediaWhereUniqueInputSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(() => MediaUpdateWithWhereUniqueWithoutPostInputSchema),
          z
            .lazy(() => MediaUpdateWithWhereUniqueWithoutPostInputSchema)
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(() => MediaUpdateManyWithWhereWithoutPostInputSchema),
          z.lazy(() => MediaUpdateManyWithWhereWithoutPostInputSchema).array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MediaScalarWhereInputSchema),
          z.lazy(() => MediaScalarWhereInputSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCommentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCommentsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCommentsInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const PostCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutCommentsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutCommentsInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutCommentsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutCommentsInputSchema)
        .optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutCommentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutCommentsInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutCommentsInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutCommentsInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutCommentsInputSchema),
          z.lazy(() => UserUpdateWithoutCommentsInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutCommentsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutCommentsInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutCommentsInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutCommentsInputSchema)
        .optional(),
      upsert: z.lazy(() => PostUpsertWithoutCommentsInputSchema).optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateToOneWithWhereWithoutCommentsInputSchema),
          z.lazy(() => PostUpdateWithoutCommentsInputSchema),
          z.lazy(() => PostUncheckedUpdateWithoutCommentsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutLikesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutLikesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutLikesInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
    })
    .strict();

export const PostCreateNestedOneWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutLikesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutLikesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutLikesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutLikesInputSchema),
          z.lazy(() => UserUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      upsert: z.lazy(() => UserUpsertWithoutLikesInputSchema).optional(),
      connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateToOneWithWhereWithoutLikesInputSchema),
          z.lazy(() => UserUpdateWithoutLikesInputSchema),
          z.lazy(() => UserUncheckedUpdateWithoutLikesInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostUpdateOneRequiredWithoutLikesNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutLikesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutLikesInputSchema)
        .optional(),
      upsert: z.lazy(() => PostUpsertWithoutLikesInputSchema).optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateToOneWithWhereWithoutLikesInputSchema),
          z.lazy(() => PostUpdateWithoutLikesInputSchema),
          z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
        ])
        .optional(),
    })
    .strict();

export const PostCreateNestedOneWithoutMediaInputSchema: z.ZodType<Prisma.PostCreateNestedOneWithoutMediaInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutMediaInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutMediaInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutMediaInputSchema)
        .optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
    })
    .strict();

export const PostUpdateOneRequiredWithoutMediaNestedInputSchema: z.ZodType<Prisma.PostUpdateOneRequiredWithoutMediaNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => PostCreateWithoutMediaInputSchema),
          z.lazy(() => PostUncheckedCreateWithoutMediaInputSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => PostCreateOrConnectWithoutMediaInputSchema)
        .optional(),
      upsert: z.lazy(() => PostUpsertWithoutMediaInputSchema).optional(),
      connect: z.lazy(() => PostWhereUniqueInputSchema).optional(),
      update: z
        .union([
          z.lazy(() => PostUpdateToOneWithWhereWithoutMediaInputSchema),
          z.lazy(() => PostUpdateWithoutMediaInputSchema),
          z.lazy(() => PostUncheckedUpdateWithoutMediaInputSchema),
        ])
        .optional(),
    })
    .strict();

export const NestedUuidFilterSchema: z.ZodType<Prisma.NestedUuidFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    not: z.union([z.string(), z.lazy(() => NestedUuidFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z
  .object({
    equals: z.string().optional(),
    in: z.string().array().optional(),
    notIn: z.string().array().optional(),
    lt: z.string().optional(),
    lte: z.string().optional(),
    gt: z.string().optional(),
    gte: z.string().optional(),
    contains: z.string().optional(),
    startsWith: z.string().optional(),
    endsWith: z.string().optional(),
    not: z
      .union([z.string(), z.lazy(() => NestedStringFilterSchema)])
      .optional(),
  })
  .strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedStringNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedUuidWithAggregatesFilterSchema: z.ZodType<Prisma.NestedUuidWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      not: z
        .union([z.string(), z.lazy(() => NestedUuidWithAggregatesFilterSchema)])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z
  .object({
    equals: z.number().optional(),
    in: z.number().array().optional(),
    notIn: z.number().array().optional(),
    lt: z.number().optional(),
    lte: z.number().optional(),
    gt: z.number().optional(),
    gte: z.number().optional(),
    not: z.union([z.number(), z.lazy(() => NestedIntFilterSchema)]).optional(),
  })
  .strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional(),
      in: z.string().array().optional(),
      notIn: z.string().array().optional(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedStringFilterSchema).optional(),
      _max: z.lazy(() => NestedStringFilterSchema).optional(),
    })
    .strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> =
  z
    .object({
      equals: z.string().optional().nullable(),
      in: z.string().array().optional().nullable(),
      notIn: z.string().array().optional().nullable(),
      lt: z.string().optional(),
      lte: z.string().optional(),
      gt: z.string().optional(),
      gte: z.string().optional(),
      contains: z.string().optional(),
      startsWith: z.string().optional(),
      endsWith: z.string().optional(),
      not: z
        .union([
          z.string(),
          z.lazy(() => NestedStringNullableWithAggregatesFilterSchema),
        ])
        .optional()
        .nullable(),
      _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
      _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
      _max: z.lazy(() => NestedStringNullableFilterSchema).optional(),
    })
    .strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> =
  z
    .object({
      equals: z.number().optional().nullable(),
      in: z.number().array().optional().nullable(),
      notIn: z.number().array().optional().nullable(),
      lt: z.number().optional(),
      lte: z.number().optional(),
      gt: z.number().optional(),
      gte: z.number().optional(),
      not: z
        .union([z.number(), z.lazy(() => NestedIntNullableFilterSchema)])
        .optional()
        .nullable(),
    })
    .strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([z.coerce.date(), z.lazy(() => NestedDateTimeFilterSchema)])
        .optional(),
    })
    .strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> =
  z
    .object({
      equals: z.coerce.date().optional(),
      in: z.coerce.date().array().optional(),
      notIn: z.coerce.date().array().optional(),
      lt: z.coerce.date().optional(),
      lte: z.coerce.date().optional(),
      gt: z.coerce.date().optional(),
      gte: z.coerce.date().optional(),
      not: z
        .union([
          z.coerce.date(),
          z.lazy(() => NestedDateTimeWithAggregatesFilterSchema),
        ])
        .optional(),
      _count: z.lazy(() => NestedIntFilterSchema).optional(),
      _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
      _max: z.lazy(() => NestedDateTimeFilterSchema).optional(),
    })
    .strict();

export const PostCreateWithoutUserInputSchema: z.ZodType<Prisma.PostCreateWithoutUserInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      comments: z
        .lazy(() => CommentCreateNestedManyWithoutPostInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutUserInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.PostCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PostCreateManyUserInputSchema),
        z.lazy(() => PostCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const CommentCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateWithoutUserInput> =
  z
    .object({
      comment_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
      post: z.lazy(() => PostCreateNestedOneWithoutCommentsInputSchema),
    })
    .strict();

export const CommentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutUserInput> =
  z
    .object({
      comment_id: z.string().optional(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const CommentCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CommentCreateWithoutUserInputSchema),
        z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const CommentCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CommentCreateManyUserInputSchema),
        z.lazy(() => CommentCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LikeCreateWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateWithoutUserInput> =
  z
    .object({
      likes_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      post: z.lazy(() => PostCreateNestedOneWithoutLikesInputSchema),
    })
    .strict();

export const LikeUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutUserInput> =
  z
    .object({
      likes_id: z.string().optional(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const LikeCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LikeCreateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.LikeCreateManyUserInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LikeCreateManyUserInputSchema),
        z.lazy(() => LikeCreateManyUserInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PostUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PostUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => PostUpdateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => PostUpdateWithoutUserInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => PostScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => PostUpdateManyMutationInputSchema),
        z.lazy(() => PostUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const PostScalarWhereInputSchema: z.ZodType<Prisma.PostScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => PostScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => PostScalarWhereInputSchema),
          z.lazy(() => PostScalarWhereInputSchema).array(),
        ])
        .optional(),
      post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutUserInputSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutUserInputSchema),
        z.lazy(() => CommentUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutUserInputSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const CommentUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => CommentScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CommentUpdateManyMutationInputSchema),
        z.lazy(() => CommentUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const CommentScalarWhereInputSchema: z.ZodType<Prisma.CommentScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => CommentScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => CommentScalarWhereInputSchema),
          z.lazy(() => CommentScalarWhereInputSchema).array(),
        ])
        .optional(),
      comment_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
      content: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const LikeUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LikeUpdateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutUserInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LikeCreateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateWithoutUserInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => LikeScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateManyMutationInputSchema),
        z.lazy(() => LikeUncheckedUpdateManyWithoutUserInputSchema),
      ]),
    })
    .strict();

export const LikeScalarWhereInputSchema: z.ZodType<Prisma.LikeScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => LikeScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => LikeScalarWhereInputSchema),
          z.lazy(() => LikeScalarWhereInputSchema).array(),
        ])
        .optional(),
      likes_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      user_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      created_at: z
        .union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()])
        .optional(),
    })
    .strict();

export const UserCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateWithoutPostsInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      comments: z
        .lazy(() => CommentCreateNestedManyWithoutUserInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutPostsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutPostsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
      ]),
    })
    .strict();

export const CommentCreateWithoutPostInputSchema: z.ZodType<Prisma.CommentCreateWithoutPostInput> =
  z
    .object({
      comment_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
      user: z.lazy(() => UserCreateNestedOneWithoutCommentsInputSchema),
    })
    .strict();

export const CommentUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.CommentUncheckedCreateWithoutPostInput> =
  z
    .object({
      comment_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const CommentCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.CommentCreateOrConnectWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => CommentCreateWithoutPostInputSchema),
        z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const CommentCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.CommentCreateManyPostInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => CommentCreateManyPostInputSchema),
        z.lazy(() => CommentCreateManyPostInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LikeCreateWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateWithoutPostInput> =
  z
    .object({
      likes_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutLikesInputSchema),
    })
    .strict();

export const LikeUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedCreateWithoutPostInput> =
  z
    .object({
      likes_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const LikeCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.LikeCreateOrConnectWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => LikeCreateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.LikeCreateManyPostInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => LikeCreateManyPostInputSchema),
        z.lazy(() => LikeCreateManyPostInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MediaCreateWithoutPostInputSchema: z.ZodType<Prisma.MediaCreateWithoutPostInput> =
  z
    .object({
      media_id: z.string().optional(),
      media_url: z.string(),
      media_type: z.string(),
    })
    .strict();

export const MediaUncheckedCreateWithoutPostInputSchema: z.ZodType<Prisma.MediaUncheckedCreateWithoutPostInput> =
  z
    .object({
      media_id: z.string().optional(),
      media_url: z.string(),
      media_type: z.string(),
    })
    .strict();

export const MediaCreateOrConnectWithoutPostInputSchema: z.ZodType<Prisma.MediaCreateOrConnectWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => MediaWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => MediaCreateWithoutPostInputSchema),
        z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const MediaCreateManyPostInputEnvelopeSchema: z.ZodType<Prisma.MediaCreateManyPostInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MediaCreateManyPostInputSchema),
        z.lazy(() => MediaCreateManyPostInputSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserUpsertWithoutPostsInputSchema: z.ZodType<Prisma.UserUpsertWithoutPostsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutPostsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutPostsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutPostsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutPostsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUpdateWithoutPostsInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutPostsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const CommentUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.CommentUpsertWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => CommentUpdateWithoutPostInputSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutPostInputSchema),
      ]),
      create: z.union([
        z.lazy(() => CommentCreateWithoutPostInputSchema),
        z.lazy(() => CommentUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const CommentUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.CommentUpdateWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => CommentWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => CommentUpdateWithoutPostInputSchema),
        z.lazy(() => CommentUncheckedUpdateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const CommentUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.CommentUpdateManyWithWhereWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => CommentScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => CommentUpdateManyMutationInputSchema),
        z.lazy(() => CommentUncheckedUpdateManyWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.LikeUpsertWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => LikeUpdateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutPostInputSchema),
      ]),
      create: z.union([
        z.lazy(() => LikeCreateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateWithoutPostInputSchema),
        z.lazy(() => LikeUncheckedUpdateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const LikeUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateManyWithWhereWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => LikeScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => LikeUpdateManyMutationInputSchema),
        z.lazy(() => LikeUncheckedUpdateManyWithoutPostInputSchema),
      ]),
    })
    .strict();

export const MediaUpsertWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.MediaUpsertWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => MediaWhereUniqueInputSchema),
      update: z.union([
        z.lazy(() => MediaUpdateWithoutPostInputSchema),
        z.lazy(() => MediaUncheckedUpdateWithoutPostInputSchema),
      ]),
      create: z.union([
        z.lazy(() => MediaCreateWithoutPostInputSchema),
        z.lazy(() => MediaUncheckedCreateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const MediaUpdateWithWhereUniqueWithoutPostInputSchema: z.ZodType<Prisma.MediaUpdateWithWhereUniqueWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => MediaWhereUniqueInputSchema),
      data: z.union([
        z.lazy(() => MediaUpdateWithoutPostInputSchema),
        z.lazy(() => MediaUncheckedUpdateWithoutPostInputSchema),
      ]),
    })
    .strict();

export const MediaUpdateManyWithWhereWithoutPostInputSchema: z.ZodType<Prisma.MediaUpdateManyWithWhereWithoutPostInput> =
  z
    .object({
      where: z.lazy(() => MediaScalarWhereInputSchema),
      data: z.union([
        z.lazy(() => MediaUpdateManyMutationInputSchema),
        z.lazy(() => MediaUncheckedUpdateManyWithoutPostInputSchema),
      ]),
    })
    .strict();

export const MediaScalarWhereInputSchema: z.ZodType<Prisma.MediaScalarWhereInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(() => MediaScalarWhereInputSchema),
          z.lazy(() => MediaScalarWhereInputSchema).array(),
        ])
        .optional(),
      OR: z
        .lazy(() => MediaScalarWhereInputSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(() => MediaScalarWhereInputSchema),
          z.lazy(() => MediaScalarWhereInputSchema).array(),
        ])
        .optional(),
      media_id: z
        .union([z.lazy(() => UuidFilterSchema), z.string()])
        .optional(),
      post_id: z.union([z.lazy(() => UuidFilterSchema), z.string()]).optional(),
      media_url: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
      media_type: z
        .union([z.lazy(() => StringFilterSchema), z.string()])
        .optional(),
    })
    .strict();

export const UserCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateWithoutCommentsInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCommentsInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCommentsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutCommentsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema),
      ]),
    })
    .strict();

export const PostCreateWithoutCommentsInputSchema: z.ZodType<Prisma.PostCreateWithoutCommentsInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedCreateWithoutCommentsInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutCommentsInput> =
  z
    .object({
      post_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutCommentsInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutCommentsInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutCommentsInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpsertWithoutCommentsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutCommentsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutCommentsInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutCommentsInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCommentsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutCommentsInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutCommentsInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUpdateWithoutCommentsInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCommentsInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.PostUpsertWithoutCommentsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PostUpdateWithoutCommentsInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutCommentsInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutCommentsInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutCommentsInputSchema),
      ]),
      where: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const PostUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutCommentsInput> =
  z
    .object({
      where: z.lazy(() => PostWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PostUpdateWithoutCommentsInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutCommentsInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.PostUpdateWithoutCommentsInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutCommentsInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutCommentsInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateWithoutLikesInputSchema: z.ZodType<Prisma.UserCreateWithoutLikesInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      posts: z
        .lazy(() => PostCreateNestedManyWithoutUserInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedCreateWithoutLikesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutLikesInput> =
  z
    .object({
      user_id: z.string().optional(),
      username: z.string(),
      email: z.string(),
      password_hash: z.string(),
      profile_picture: z.string().optional().nullable(),
      bio: z.string().optional().nullable(),
      full_name: z.string(),
      posts: z
        .lazy(() => PostUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutUserInputSchema)
        .optional(),
    })
    .strict();

export const UserCreateOrConnectWithoutLikesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutLikesInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const PostCreateWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateWithoutLikesInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
      comments: z
        .lazy(() => CommentCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedCreateWithoutLikesInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutLikesInput> =
  z
    .object({
      post_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutLikesInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const UserUpsertWithoutLikesInputSchema: z.ZodType<Prisma.UserUpsertWithoutLikesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutLikesInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLikesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutLikesInputSchema),
        z.lazy(() => UserUncheckedCreateWithoutLikesInputSchema),
      ]),
      where: z.lazy(() => UserWhereInputSchema).optional(),
    })
    .strict();

export const UserUpdateToOneWithWhereWithoutLikesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => UserUpdateWithoutLikesInputSchema),
        z.lazy(() => UserUncheckedUpdateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const UserUpdateWithoutLikesInputSchema: z.ZodType<Prisma.UserUpdateWithoutLikesInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      posts: z
        .lazy(() => PostUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const UserUncheckedUpdateWithoutLikesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutLikesInput> =
  z
    .object({
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      username: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      email: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      password_hash: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      profile_picture: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      bio: z
        .union([
          z.string(),
          z.lazy(() => NullableStringFieldUpdateOperationsInputSchema),
        ])
        .optional()
        .nullable(),
      full_name: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      posts: z
        .lazy(() => PostUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutUserNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUpsertWithoutLikesInputSchema: z.ZodType<Prisma.PostUpsertWithoutLikesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PostUpdateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutLikesInputSchema),
      ]),
      where: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const PostUpdateToOneWithWhereWithoutLikesInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutLikesInput> =
  z
    .object({
      where: z.lazy(() => PostWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PostUpdateWithoutLikesInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutLikesInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithoutLikesInputSchema: z.ZodType<Prisma.PostUpdateWithoutLikesInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutLikesInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutLikesInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateWithoutMediaInputSchema: z.ZodType<Prisma.PostCreateWithoutMediaInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
      user: z.lazy(() => UserCreateNestedOneWithoutPostsInputSchema),
      comments: z
        .lazy(() => CommentCreateNestedManyWithoutPostInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedCreateWithoutMediaInputSchema: z.ZodType<Prisma.PostUncheckedCreateWithoutMediaInput> =
  z
    .object({
      post_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      comments: z
        .lazy(() => CommentUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedCreateNestedManyWithoutPostInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateOrConnectWithoutMediaInputSchema: z.ZodType<Prisma.PostCreateOrConnectWithoutMediaInput> =
  z
    .object({
      where: z.lazy(() => PostWhereUniqueInputSchema),
      create: z.union([
        z.lazy(() => PostCreateWithoutMediaInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutMediaInputSchema),
      ]),
    })
    .strict();

export const PostUpsertWithoutMediaInputSchema: z.ZodType<Prisma.PostUpsertWithoutMediaInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => PostUpdateWithoutMediaInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutMediaInputSchema),
      ]),
      create: z.union([
        z.lazy(() => PostCreateWithoutMediaInputSchema),
        z.lazy(() => PostUncheckedCreateWithoutMediaInputSchema),
      ]),
      where: z.lazy(() => PostWhereInputSchema).optional(),
    })
    .strict();

export const PostUpdateToOneWithWhereWithoutMediaInputSchema: z.ZodType<Prisma.PostUpdateToOneWithWhereWithoutMediaInput> =
  z
    .object({
      where: z.lazy(() => PostWhereInputSchema).optional(),
      data: z.union([
        z.lazy(() => PostUpdateWithoutMediaInputSchema),
        z.lazy(() => PostUncheckedUpdateWithoutMediaInputSchema),
      ]),
    })
    .strict();

export const PostUpdateWithoutMediaInputSchema: z.ZodType<Prisma.PostUpdateWithoutMediaInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutPostsNestedInputSchema)
        .optional(),
      comments: z
        .lazy(() => CommentUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutMediaInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutMediaInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostCreateManyUserInputSchema: z.ZodType<Prisma.PostCreateManyUserInput> =
  z
    .object({
      post_id: z.string().optional(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const CommentCreateManyUserInputSchema: z.ZodType<Prisma.CommentCreateManyUserInput> =
  z
    .object({
      comment_id: z.string().optional(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const LikeCreateManyUserInputSchema: z.ZodType<Prisma.LikeCreateManyUserInput> =
  z
    .object({
      likes_id: z.string().optional(),
      post_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const PostUpdateWithoutUserInputSchema: z.ZodType<Prisma.PostUpdateWithoutUserInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedUpdateWithoutUserInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      comments: z
        .lazy(() => CommentUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      likes: z
        .lazy(() => LikeUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
      media: z
        .lazy(() => MediaUncheckedUpdateManyWithoutPostNestedInputSchema)
        .optional(),
    })
    .strict();

export const PostUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.PostUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUpdateWithoutUserInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post: z
        .lazy(() => PostUpdateOneRequiredWithoutCommentsNestedInputSchema)
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutUserInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateWithoutUserInputSchema: z.ZodType<Prisma.LikeUpdateWithoutUserInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post: z
        .lazy(() => PostUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutUserInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutUserInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      post_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentCreateManyPostInputSchema: z.ZodType<Prisma.CommentCreateManyPostInput> =
  z
    .object({
      comment_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
      content: z.string(),
    })
    .strict();

export const LikeCreateManyPostInputSchema: z.ZodType<Prisma.LikeCreateManyPostInput> =
  z
    .object({
      likes_id: z.string().optional(),
      user_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();

export const MediaCreateManyPostInputSchema: z.ZodType<Prisma.MediaCreateManyPostInput> =
  z
    .object({
      media_id: z.string().optional(),
      media_url: z.string(),
      media_type: z.string(),
    })
    .strict();

export const CommentUpdateWithoutPostInputSchema: z.ZodType<Prisma.CommentUpdateWithoutPostInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutCommentsNestedInputSchema)
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateWithoutPostInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const CommentUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.CommentUncheckedUpdateManyWithoutPostInput> =
  z
    .object({
      comment_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      content: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUpdateWithoutPostInputSchema: z.ZodType<Prisma.LikeUpdateWithoutPostInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user: z
        .lazy(() => UserUpdateOneRequiredWithoutLikesNestedInputSchema)
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateWithoutPostInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const LikeUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.LikeUncheckedUpdateManyWithoutPostInput> =
  z
    .object({
      likes_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaUpdateWithoutPostInputSchema: z.ZodType<Prisma.MediaUpdateWithoutPostInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaUncheckedUpdateWithoutPostInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateWithoutPostInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

export const MediaUncheckedUpdateManyWithoutPostInputSchema: z.ZodType<Prisma.MediaUncheckedUpdateManyWithoutPostInput> =
  z
    .object({
      media_id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_url: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
      media_type: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputSchema),
        ])
        .optional(),
    })
    .strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereInputSchema.optional(),
      orderBy: z
        .union([
          UserOrderByWithRelationInputSchema.array(),
          UserOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: UserWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([UserScalarFieldEnumSchema, UserScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithRelationInputSchema.array(),
        UserOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: UserWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
    orderBy: z
      .union([
        UserOrderByWithAggregationInputSchema.array(),
        UserOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: UserScalarFieldEnumSchema.array(),
    having: UserScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> =
  z
    .object({
      select: UserSelectSchema.optional(),
      include: UserIncludeSchema.optional(),
      where: UserWhereUniqueInputSchema,
    })
    .strict();

export const PostFindFirstArgsSchema: z.ZodType<Prisma.PostFindFirstArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const PostFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PostFindFirstOrThrowArgs> =
  z
    .object({
      select: PostSelectSchema.optional(),
      include: PostIncludeSchema.optional(),
      where: PostWhereInputSchema.optional(),
      orderBy: z
        .union([
          PostOrderByWithRelationInputSchema.array(),
          PostOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: PostWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const PostFindManyArgsSchema: z.ZodType<Prisma.PostFindManyArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([PostScalarFieldEnumSchema, PostScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const PostAggregateArgsSchema: z.ZodType<Prisma.PostAggregateArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithRelationInputSchema.array(),
        PostOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: PostWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const PostGroupByArgsSchema: z.ZodType<Prisma.PostGroupByArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
    orderBy: z
      .union([
        PostOrderByWithAggregationInputSchema.array(),
        PostOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: PostScalarFieldEnumSchema.array(),
    having: PostScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const PostFindUniqueArgsSchema: z.ZodType<Prisma.PostFindUniqueArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PostFindUniqueOrThrowArgs> =
  z
    .object({
      select: PostSelectSchema.optional(),
      include: PostIncludeSchema.optional(),
      where: PostWhereUniqueInputSchema,
    })
    .strict();

export const CommentFindFirstArgsSchema: z.ZodType<Prisma.CommentFindFirstArgs> =
  z
    .object({
      select: CommentSelectSchema.optional(),
      include: CommentIncludeSchema.optional(),
      where: CommentWhereInputSchema.optional(),
      orderBy: z
        .union([
          CommentOrderByWithRelationInputSchema.array(),
          CommentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CommentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          CommentScalarFieldEnumSchema,
          CommentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const CommentFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CommentFindFirstOrThrowArgs> =
  z
    .object({
      select: CommentSelectSchema.optional(),
      include: CommentIncludeSchema.optional(),
      where: CommentWhereInputSchema.optional(),
      orderBy: z
        .union([
          CommentOrderByWithRelationInputSchema.array(),
          CommentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CommentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          CommentScalarFieldEnumSchema,
          CommentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const CommentFindManyArgsSchema: z.ZodType<Prisma.CommentFindManyArgs> =
  z
    .object({
      select: CommentSelectSchema.optional(),
      include: CommentIncludeSchema.optional(),
      where: CommentWhereInputSchema.optional(),
      orderBy: z
        .union([
          CommentOrderByWithRelationInputSchema.array(),
          CommentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CommentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          CommentScalarFieldEnumSchema,
          CommentScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict();

export const CommentAggregateArgsSchema: z.ZodType<Prisma.CommentAggregateArgs> =
  z
    .object({
      where: CommentWhereInputSchema.optional(),
      orderBy: z
        .union([
          CommentOrderByWithRelationInputSchema.array(),
          CommentOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: CommentWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
    })
    .strict();

export const CommentGroupByArgsSchema: z.ZodType<Prisma.CommentGroupByArgs> = z
  .object({
    where: CommentWhereInputSchema.optional(),
    orderBy: z
      .union([
        CommentOrderByWithAggregationInputSchema.array(),
        CommentOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: CommentScalarFieldEnumSchema.array(),
    having: CommentScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const CommentFindUniqueArgsSchema: z.ZodType<Prisma.CommentFindUniqueArgs> =
  z
    .object({
      select: CommentSelectSchema.optional(),
      include: CommentIncludeSchema.optional(),
      where: CommentWhereUniqueInputSchema,
    })
    .strict();

export const CommentFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CommentFindUniqueOrThrowArgs> =
  z
    .object({
      select: CommentSelectSchema.optional(),
      include: CommentIncludeSchema.optional(),
      where: CommentWhereUniqueInputSchema,
    })
    .strict();

export const LikeFindFirstArgsSchema: z.ZodType<Prisma.LikeFindFirstArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const LikeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.LikeFindFirstOrThrowArgs> =
  z
    .object({
      select: LikeSelectSchema.optional(),
      include: LikeIncludeSchema.optional(),
      where: LikeWhereInputSchema.optional(),
      orderBy: z
        .union([
          LikeOrderByWithRelationInputSchema.array(),
          LikeOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: LikeWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const LikeFindManyArgsSchema: z.ZodType<Prisma.LikeFindManyArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([LikeScalarFieldEnumSchema, LikeScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const LikeAggregateArgsSchema: z.ZodType<Prisma.LikeAggregateArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithRelationInputSchema.array(),
        LikeOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: LikeWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const LikeGroupByArgsSchema: z.ZodType<Prisma.LikeGroupByArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
    orderBy: z
      .union([
        LikeOrderByWithAggregationInputSchema.array(),
        LikeOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: LikeScalarFieldEnumSchema.array(),
    having: LikeScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const LikeFindUniqueArgsSchema: z.ZodType<Prisma.LikeFindUniqueArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.LikeFindUniqueOrThrowArgs> =
  z
    .object({
      select: LikeSelectSchema.optional(),
      include: LikeIncludeSchema.optional(),
      where: LikeWhereUniqueInputSchema,
    })
    .strict();

export const MediaFindFirstArgsSchema: z.ZodType<Prisma.MediaFindFirstArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    where: MediaWhereInputSchema.optional(),
    orderBy: z
      .union([
        MediaOrderByWithRelationInputSchema.array(),
        MediaOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: MediaWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const MediaFindFirstOrThrowArgsSchema: z.ZodType<Prisma.MediaFindFirstOrThrowArgs> =
  z
    .object({
      select: MediaSelectSchema.optional(),
      include: MediaIncludeSchema.optional(),
      where: MediaWhereInputSchema.optional(),
      orderBy: z
        .union([
          MediaOrderByWithRelationInputSchema.array(),
          MediaOrderByWithRelationInputSchema,
        ])
        .optional(),
      cursor: MediaWhereUniqueInputSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()])
        .optional(),
    })
    .strict();

export const MediaFindManyArgsSchema: z.ZodType<Prisma.MediaFindManyArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    where: MediaWhereInputSchema.optional(),
    orderBy: z
      .union([
        MediaOrderByWithRelationInputSchema.array(),
        MediaOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: MediaWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([MediaScalarFieldEnumSchema, MediaScalarFieldEnumSchema.array()])
      .optional(),
  })
  .strict();

export const MediaAggregateArgsSchema: z.ZodType<Prisma.MediaAggregateArgs> = z
  .object({
    where: MediaWhereInputSchema.optional(),
    orderBy: z
      .union([
        MediaOrderByWithRelationInputSchema.array(),
        MediaOrderByWithRelationInputSchema,
      ])
      .optional(),
    cursor: MediaWhereUniqueInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const MediaGroupByArgsSchema: z.ZodType<Prisma.MediaGroupByArgs> = z
  .object({
    where: MediaWhereInputSchema.optional(),
    orderBy: z
      .union([
        MediaOrderByWithAggregationInputSchema.array(),
        MediaOrderByWithAggregationInputSchema,
      ])
      .optional(),
    by: MediaScalarFieldEnumSchema.array(),
    having: MediaScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
  })
  .strict();

export const MediaFindUniqueArgsSchema: z.ZodType<Prisma.MediaFindUniqueArgs> =
  z
    .object({
      select: MediaSelectSchema.optional(),
      include: MediaIncludeSchema.optional(),
      where: MediaWhereUniqueInputSchema,
    })
    .strict();

export const MediaFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.MediaFindUniqueOrThrowArgs> =
  z
    .object({
      select: MediaSelectSchema.optional(),
      include: MediaIncludeSchema.optional(),
      where: MediaWhereUniqueInputSchema,
    })
    .strict();

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
  })
  .strict();

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
    create: z.union([UserCreateInputSchema, UserUncheckedCreateInputSchema]),
    update: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
  })
  .strict();

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z
  .object({
    data: z.union([
      UserCreateManyInputSchema,
      UserCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        UserCreateManyInputSchema,
        UserCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z
  .object({
    select: UserSelectSchema.optional(),
    include: UserIncludeSchema.optional(),
    data: z.union([UserUpdateInputSchema, UserUncheckedUpdateInputSchema]),
    where: UserWhereUniqueInputSchema,
  })
  .strict();

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z
  .object({
    data: z.union([
      UserUpdateManyMutationInputSchema,
      UserUncheckedUpdateManyInputSchema,
    ]),
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z
  .object({
    where: UserWhereInputSchema.optional(),
  })
  .strict();

export const PostCreateArgsSchema: z.ZodType<Prisma.PostCreateArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    data: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
  })
  .strict();

export const PostUpsertArgsSchema: z.ZodType<Prisma.PostUpsertArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
    create: z.union([PostCreateInputSchema, PostUncheckedCreateInputSchema]),
    update: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
  })
  .strict();

export const PostCreateManyArgsSchema: z.ZodType<Prisma.PostCreateManyArgs> = z
  .object({
    data: z.union([
      PostCreateManyInputSchema,
      PostCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PostCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PostCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        PostCreateManyInputSchema,
        PostCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PostDeleteArgsSchema: z.ZodType<Prisma.PostDeleteArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostUpdateArgsSchema: z.ZodType<Prisma.PostUpdateArgs> = z
  .object({
    select: PostSelectSchema.optional(),
    include: PostIncludeSchema.optional(),
    data: z.union([PostUpdateInputSchema, PostUncheckedUpdateInputSchema]),
    where: PostWhereUniqueInputSchema,
  })
  .strict();

export const PostUpdateManyArgsSchema: z.ZodType<Prisma.PostUpdateManyArgs> = z
  .object({
    data: z.union([
      PostUpdateManyMutationInputSchema,
      PostUncheckedUpdateManyInputSchema,
    ]),
    where: PostWhereInputSchema.optional(),
  })
  .strict();

export const PostDeleteManyArgsSchema: z.ZodType<Prisma.PostDeleteManyArgs> = z
  .object({
    where: PostWhereInputSchema.optional(),
  })
  .strict();

export const CommentCreateArgsSchema: z.ZodType<Prisma.CommentCreateArgs> = z
  .object({
    select: CommentSelectSchema.optional(),
    include: CommentIncludeSchema.optional(),
    data: z.union([
      CommentCreateInputSchema,
      CommentUncheckedCreateInputSchema,
    ]),
  })
  .strict();

export const CommentUpsertArgsSchema: z.ZodType<Prisma.CommentUpsertArgs> = z
  .object({
    select: CommentSelectSchema.optional(),
    include: CommentIncludeSchema.optional(),
    where: CommentWhereUniqueInputSchema,
    create: z.union([
      CommentCreateInputSchema,
      CommentUncheckedCreateInputSchema,
    ]),
    update: z.union([
      CommentUpdateInputSchema,
      CommentUncheckedUpdateInputSchema,
    ]),
  })
  .strict();

export const CommentCreateManyArgsSchema: z.ZodType<Prisma.CommentCreateManyArgs> =
  z
    .object({
      data: z.union([
        CommentCreateManyInputSchema,
        CommentCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const CommentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CommentCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        CommentCreateManyInputSchema,
        CommentCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const CommentDeleteArgsSchema: z.ZodType<Prisma.CommentDeleteArgs> = z
  .object({
    select: CommentSelectSchema.optional(),
    include: CommentIncludeSchema.optional(),
    where: CommentWhereUniqueInputSchema,
  })
  .strict();

export const CommentUpdateArgsSchema: z.ZodType<Prisma.CommentUpdateArgs> = z
  .object({
    select: CommentSelectSchema.optional(),
    include: CommentIncludeSchema.optional(),
    data: z.union([
      CommentUpdateInputSchema,
      CommentUncheckedUpdateInputSchema,
    ]),
    where: CommentWhereUniqueInputSchema,
  })
  .strict();

export const CommentUpdateManyArgsSchema: z.ZodType<Prisma.CommentUpdateManyArgs> =
  z
    .object({
      data: z.union([
        CommentUpdateManyMutationInputSchema,
        CommentUncheckedUpdateManyInputSchema,
      ]),
      where: CommentWhereInputSchema.optional(),
    })
    .strict();

export const CommentDeleteManyArgsSchema: z.ZodType<Prisma.CommentDeleteManyArgs> =
  z
    .object({
      where: CommentWhereInputSchema.optional(),
    })
    .strict();

export const LikeCreateArgsSchema: z.ZodType<Prisma.LikeCreateArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    data: z.union([LikeCreateInputSchema, LikeUncheckedCreateInputSchema]),
  })
  .strict();

export const LikeUpsertArgsSchema: z.ZodType<Prisma.LikeUpsertArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
    create: z.union([LikeCreateInputSchema, LikeUncheckedCreateInputSchema]),
    update: z.union([LikeUpdateInputSchema, LikeUncheckedUpdateInputSchema]),
  })
  .strict();

export const LikeCreateManyArgsSchema: z.ZodType<Prisma.LikeCreateManyArgs> = z
  .object({
    data: z.union([
      LikeCreateManyInputSchema,
      LikeCreateManyInputSchema.array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const LikeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.LikeCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        LikeCreateManyInputSchema,
        LikeCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const LikeDeleteArgsSchema: z.ZodType<Prisma.LikeDeleteArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeUpdateArgsSchema: z.ZodType<Prisma.LikeUpdateArgs> = z
  .object({
    select: LikeSelectSchema.optional(),
    include: LikeIncludeSchema.optional(),
    data: z.union([LikeUpdateInputSchema, LikeUncheckedUpdateInputSchema]),
    where: LikeWhereUniqueInputSchema,
  })
  .strict();

export const LikeUpdateManyArgsSchema: z.ZodType<Prisma.LikeUpdateManyArgs> = z
  .object({
    data: z.union([
      LikeUpdateManyMutationInputSchema,
      LikeUncheckedUpdateManyInputSchema,
    ]),
    where: LikeWhereInputSchema.optional(),
  })
  .strict();

export const LikeDeleteManyArgsSchema: z.ZodType<Prisma.LikeDeleteManyArgs> = z
  .object({
    where: LikeWhereInputSchema.optional(),
  })
  .strict();

export const MediaCreateArgsSchema: z.ZodType<Prisma.MediaCreateArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    data: z.union([MediaCreateInputSchema, MediaUncheckedCreateInputSchema]),
  })
  .strict();

export const MediaUpsertArgsSchema: z.ZodType<Prisma.MediaUpsertArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    where: MediaWhereUniqueInputSchema,
    create: z.union([MediaCreateInputSchema, MediaUncheckedCreateInputSchema]),
    update: z.union([MediaUpdateInputSchema, MediaUncheckedUpdateInputSchema]),
  })
  .strict();

export const MediaCreateManyArgsSchema: z.ZodType<Prisma.MediaCreateManyArgs> =
  z
    .object({
      data: z.union([
        MediaCreateManyInputSchema,
        MediaCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MediaCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MediaCreateManyAndReturnArgs> =
  z
    .object({
      data: z.union([
        MediaCreateManyInputSchema,
        MediaCreateManyInputSchema.array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MediaDeleteArgsSchema: z.ZodType<Prisma.MediaDeleteArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    where: MediaWhereUniqueInputSchema,
  })
  .strict();

export const MediaUpdateArgsSchema: z.ZodType<Prisma.MediaUpdateArgs> = z
  .object({
    select: MediaSelectSchema.optional(),
    include: MediaIncludeSchema.optional(),
    data: z.union([MediaUpdateInputSchema, MediaUncheckedUpdateInputSchema]),
    where: MediaWhereUniqueInputSchema,
  })
  .strict();

export const MediaUpdateManyArgsSchema: z.ZodType<Prisma.MediaUpdateManyArgs> =
  z
    .object({
      data: z.union([
        MediaUpdateManyMutationInputSchema,
        MediaUncheckedUpdateManyInputSchema,
      ]),
      where: MediaWhereInputSchema.optional(),
    })
    .strict();

export const MediaDeleteManyArgsSchema: z.ZodType<Prisma.MediaDeleteManyArgs> =
  z
    .object({
      where: MediaWhereInputSchema.optional(),
    })
    .strict();
