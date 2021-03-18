import { memo } from 'react';

export const Alert = memo(function Alert({ type, message }) {
  return (
    <div
      style={{ transition: 'background-color 300ms ease' }}
      className={`alert alert-${type} mt-3 d-inline-block`}
      role="alert"
    >
      {message}
    </div>
  );
});
